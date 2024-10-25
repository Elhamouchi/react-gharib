import React, { useState } from "react"; 
export default function Form(){
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  function handlerOnChangeNom(event) {
    setNom(event.target.value);
  }
  function handlerOnChangePrenom(event) {
    setPrenom(event.target.value);
  }

  function handlerSubmit(event) {
    event.preventDefault();
    alert(`salut nom: ${nom} prenom: ${prenom}`)
  }
  return (
      <form onSubmit={handlerSubmit}>
        <div className="list">
          <h2 className="title">Formulaire Inscription</h2>
          <div>
            <label>Nom:</label>
            <input type="text" onChange={handlerOnChangeNom} value={nom} />
          </div>
          <div>
            <label>Prenom:</label>
            <input
              type="text"
              onChange={handlerOnChangePrenom}
              value={prenom}
            />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
  );
}