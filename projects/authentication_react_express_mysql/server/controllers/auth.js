import db from "../db/connection.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
  const { name, email, password } = req.body;
  console.log('hi we get a requist, body of requist: ', req.body);
  if (
    typeof name != "string" ||
    typeof email != "string" ||
    typeof password != "string"
  ) {
    res.json({ Error: "bad requist" });
    return;
  }

  const sql_searchForUser = "SELECT * from users where email = ?";
  const sql_inserUser ="INSERT INTO users(name, email, password) values(?, ?, ?)";

  db.query(sql_searchForUser, [email], (err, data) => {
    if (err) {
      res.json(err);
      return;
    }

    if (data.length > 0) {
      res.json({ error: "user alread exists" });
      return;
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) res.json({ error: "Error for hashing password" });
      const values = [name, email, hash];
      db.query(sql_inserUser, values, (err, result) => {
        if (err) res.json(err);
        res.json({ message: "Success"});
      });
    });
  });
};

export const login = (req, res)=>{
  const {email, password} = req.body;
  const sql_searchForUserByEmail = "SELECT * from users where email = ?";
  
  db.query(sql_searchForUserByEmail, email, (err, result)=>{
    if(err) res.json(err);
    if(result.length > 0){
      bcrypt.compare(password.toString(), result[0].password, (err, compare_res)=>{
        if(err)  res.json(err);
        if(compare_res){
          const name = result[0].name;
          const token = jwt.sign({ name }, process.env.JWT_SECRET_KEY, {expiresIn: '2d'});
          res.cookie('token', token);
          return res.json({ message: "Success" });
        }else{
          return res.json({ message: "user not found" });;
        }
      })
    }else{
      res.json({message: 'user not found'})
    }
  });
}

export const verifyuser = (req, res, next) =>{
  console.log(req.cookies);
  const token = req.cookies.token;
  if(!token){
    return res.json({Error: "You are not authenticated"});
  }else{
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded)=>{
      if(err){
        return res.json({Error: "Token is not okey"});
      } else{
        req.name = decoded.name;
        next()
      }
    });
  }
}

export const jwtRes = (req, res)=>{
  return res.json({message: 'Success', name: req.name})
}

export const logout = (req, res)=>{
  res.clearCookie('token');
  return res.json({message: 'Success'})
}