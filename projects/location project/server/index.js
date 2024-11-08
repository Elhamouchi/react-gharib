import express, { json } from "express";
// import { isValidNom } from './validation';

const app = express();
const port = 8080;

app.use(json());

app.get("/", (req, res) => {
  res.send("hello");
});


app.post("/login", (req, res) => {
  const {login, password } = req.body;
  if (adress === undefined || isvalidAdress(adress)) {
    res.status(400).send("invalid adress");
    return;
  }
  if (password === undefined || isvalidPassword(password)) {
    res.status(400).send("invalid password");
    return;
  }
  res.send("valid data");
});


app.post("/inscription", (req, res) => {
  const { cin, nom, prenom, adress, tel, login, password } = req.body;
  if (nom === undefined || !isvalidNom(nom)) {
    res.status(400).send("invalid nom");
    return;
  }

  if (prenom === undefined || !isvalidNom(prenom)) {
    res.status(400).send("invalid prenom");
    return;
  }

  if (cin === undefined || isvalidCIN(cin)) {
    res.status(400).send("invalid cin");
    return;
  }
  
  if(adress === undefined || isvalidAdress(adress)){
    res.status(400).send("invalid adress");
    return;
  }

  if (tel === undefined || isvalidTel(tel)) {
    res.status(400).send("invalid adress");
    return;
  }

  if (login === undefined || isvalidEmail(login)) {
    res.status(400).send("invalid login");
    return;
  }
  if (password === undefined || isvalidPassword(password)) {
    res.status(400).send("invalid password");
    return;
  }
  res.send("valid data");
});

app.listen(port, () => {
  console.log("server started on " + port);
});


function validateWithRegEx(string, regex){
  return regex.test(string);
}

function isvalidNom(string) {
  const regex = /^[a-zA-Z]{2,255}$/;
  return regex.test(string);
}

function isvalidCIN(string) {
  const regex = /^[a-zA-Z]{1}[0-9]{4}$/;
  return regex.test(string);
}

function isvalidAdress(string){
  return typeof string === 'string';
}

function isvalidTel(string) {
  const regex = /^\+?[0-9]{8, 15}$/;
  return regex.test(string);
}

function isvalidEmail(string){
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(string);
}

function isvalidPassword(string){
  return string.lenth > 7;
}