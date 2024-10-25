import React, { useEffect, useState } from "react";
import './App.css';
export default function App() {
  const [id, setId] = useState(1);
  const [utilisateur, setUtilisateur] = useState({});
  const [address, setAddress] = useState({});
  function handelChangeId(event) {
    setId(event.target.value);
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        setAddress(user.address);
        setUtilisateur(user);
      });
  }, [id]);
  return (
    <div>
      {" "}
      <h1>Details utilisateur</h1>{" "}
      <div>
        {" "}
        <label>donner le id:</label>{" "}
        <input type="text" onChange={handelChangeId} value={id}></input>{" "}
      </div>{" "}
      {utilisateur && address ? (
        <div className="child" key={utilisateur.id}>
          {" "}
          <h3 style={{ color: "rgb(92, 62, 3)" }}>
            {" "}
            id:{utilisateur.id} nom: {utilisateur.name} {utilisateur.username}
          </h3>{" "}
          <p>email:{utilisateur.email}</p>{" "}
          <p> telephone:{utilisateur.phone} </p>{" "}
          <p> site web:{utilisateur.website} </p>{" "}
          <p> rue : {address.street} </p> <p> ville : {address.city} </p>{" "}
        </div>
      ) : (
        "svp choisir un id valide!!!!"
      )}{" "}
    </div>
  );
}
