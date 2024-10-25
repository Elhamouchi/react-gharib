import React, { useState } from "react";
import ChercheBar from "./components/ChercheBar";
import ResultatList from "./components/ResultatList";
import Details from "./components/Details"

const list = [
  { id: 1, nom: "banane", type: "fruit", prix: 100 },
  { id: 2, nom: "orange", type: "fruit", prix: 150 },
  { id: 3, nom: "pomme", type: "fruit", prix: 100 },
  { id: 4, nom: "raisins", type: "fruit", prix: 150 },
  { id: 5, nom: "kiwi", type: "fruit", prix: 100 },
  { id: 6, nom: "tomate", type: "d:\ofppt\studying_now\react\react-with-gharib\JeDe\public d:\ofppt\studying_now\react\react-with-gharib\JeDe\src d:\ofppt\studying_now\react\react-with-gharib\JeDe\package.json d:\ofppt\studying_now\react\react-with-gharib\JeDe\README.md", prix: 140 },
  { id: 7, nom: "carotte", type: "legume", prix: 100 },
  { id: 8, nom: "pomme de terre", type: "legume", prix: 130 },
  { id: 9, nom: "navet", type: "legume", prix: 100 },
  { id: 10, nom: "poivron", type: "legume", prix: 170 },
];
export default function App() {
  // start state declaration
  const [type, setType] = useState("");
  const [resultas, setResultas] = useState([]);
  const [prd, setPrd] = useState(null) 
  // end statr declaration

  /**
   * @param {string} s_type 
  */
  function onChercheSubmitApp(s_type) {
    setType(s_type);
    setPrd(null)
    setResultas(list.filter((item) => item.type.toUpperCase() === s_type));
  }

  /**
   * @param {string} prdName 
  */
  function onItemClicked(prd){
    
    setPrd(prd)
  }

  function closeDetails(){
    setPrd(null)
  }
  return (
    <div className="App container m-5">
      <h1>Composant App</h1> <ChercheBar onChercheSubmit={onChercheSubmitApp} />
      <div>
        <p>
          le type:
          <span style={{ color: "red", fontWeight: "bold" }}>{type}</span>
        </p>
        <p>
          count:
          <span style={{ color: "red", fontWeight: "bold" }}>{resultas.length}</span>
        </p>
      </div>
      <ResultatList resultats={resultas} handleClick={onItemClicked} />
      <Details item={prd} closeDetails={closeDetails}/>
    
      
    </div>
  );
}
