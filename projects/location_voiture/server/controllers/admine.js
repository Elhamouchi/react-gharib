import db from "../db/connection.js";

export const addCar = (req, res) => {
  const { mat, marque, model, color, nb_place, transmission } = req.body;
  // if (
  //   typeof name != "string" ||
  //   typeof email != "string" ||
  //   typeof password != "string"
  // ) {
  //   res.json({ Error: "bad requist" });
  //   return;
  // }

  const sql_searchForCar = "SELECT * from voiture where mat = ?";
  const sql_insertCar =
    "INSERT INTO voiture(mat, marque, model, color, nb_place, transmission) values(?, ?, ?, ?, ?, ?)";

  db.query(sql_searchForCar, [mat], (err, data) => {
    if (err) {
      res.json({ message: err });
      return;
    }

    if (data.length > 0) {
      res.json({ message: "car alread exists" });
      return;
    }

    const values = [mat, marque, model, color, nb_place, transmission];
    db.query(sql_insertCar, values, (err, result) => {
      if (err) res.json(err);
      res.json({ message: "Success" });
    });
  });
};
