import { useState } from "react";
import Ex1Composant1 from "./ex1 single Component/Composant1";
import Ex2App from "./ex2/App";

function App() {
  const [isEx1, setEx1] = useState(true);
  return (
    <div className="container">
      <div className="my-3 text-center">
        <button
          className={isEx1 ? "btn btn-primary" : "btn btn-danger"}
          onClick={() => setEx1(true)}
        >
          Exercice 1
        </button>
        <button
          className={isEx1 ? "btn btn-danger ms-4" : "btn btn-primary ms-4"}
          onClick={() => setEx1(false)}
        >
          Exercice 2
        </button>
      </div>

      {isEx1 ? <Ex1Composant1 /> : <Ex2App />}
    </div>
  );
}

export default App;
