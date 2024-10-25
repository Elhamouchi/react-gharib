import { useState } from "react";
// import "./App.css";

function App() {
  const [nom, setNom] = useState("");
  console.log('2=>',nom);
  const [prenom, setPrenom] = useState("");
  const [paragraph, setParagraph] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraph(`nom: ${nom} prenom: ${prenom}`);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        Nom:{" "}
        <input
          type="text"
          value={nom}
          onChange={(e) => {
            setNom(e.target.value);
            console.log("1=>", nom);
            // console.log(e);
            // console.log(e.target);
          }}
        />
        <br />
        Pronom:{" "}
        <input
          type="text"
          value={prenom}
          onChange={(e) => {
            setPrenom(e.target.value);
          }}
        />
        <br />
        <input type="submit" />
      </form>

      <p>{paragraph}</p>
    </div>
  );
}

export default App;
