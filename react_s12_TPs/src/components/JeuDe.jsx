import React, { useState } from "react";

export default function JeuDe() {
  const [face, setFace] = useState(null);
  const [compteur, setCompteur] = useState(0);

  const [choise, setChoise] = useState(1);
  const [is_player_1, setPlayer] = useState(true);
  const [is_winn, setWinn] = useState(false);

  const handlePlayBTN = () => {
    const valeur = Math.floor(Math.random() * 6) + 1;
    console.log(choise, valeur);
    if(valeur === +choise){
      setWinn(true);
      console.log('sss')
    } 
    setFace(valeur);
    setCompteur(compteur + 1);
  };

  const handleRestBTN = () => {
    setFace(null);
    setCompteur(0);
    setPlayer(true);
    setWinn(false);
    setChoise(1);
  };
  const JouerClick = () => {
    setPlayer(false);
  }
  const imgSrc = "face" + face + ".png";
  const imgStyle = { width: "200px" };

  return (
    <>
      {is_player_1 ? (
        <div>
          <h1>Jeu de de Joueur 1</h1>
          <span>Donner le numero cache entre 1 et 6: {choise}</span>
          <input
            type="number"
            value={choise}
            onChange={(e) => setChoise(e.target.value)}
            min={1}
            max={6}
          />
          <button onClick={JouerClick}>Jouer</button>
        </div>
      ) : (
        <div>
          <h1>Jeu de de Joueur 2</h1>
          <h3>Face: {face}</h3>
          {face && <img src={imgSrc} style={imgStyle} alt={imgSrc}></img>}
          <h3>Nombre d'essais: {compteur}</h3>
          {is_winn ? (
            <>
              <p>Braco vous avez trouvé la face cachée</p>{" "}
              <button onClick={handleRestBTN}>Initailiser</button>
            </>
          ) : (
            <button onClick={handlePlayBTN}>jouer</button>
          )}

        </div>
      )}
    </>
  );
}

