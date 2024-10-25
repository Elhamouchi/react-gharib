import { useState } from "react";
import Form from "./components/Form";
import ListArticle from "./components/ListArticle"; 
import Coordonnee from "./components/Coordonnee"; 
import JeuDe from "./components/JeuDe";
import "./index.css";
export default function App() {
  const [ex, setEx] = useState("1");
  return (
    <div className="App">
      <div className="container">
        <select style={{marginLeft: 'auto' ,marginBottom: '40px'}} value={ex} onChange={(e) => setEx(e.target.value)}>
          <option value="1">ex1 - Form</option>
          <option value="2">ex2 - ListArticle</option>
          <option value="3">ex3 - Coordonnee</option>
          <option value="4">ex4 - JeuDe</option>
        </select>
        {ex === "1" && <Form />}
        {ex === "2" && <ListArticle />}
        {ex === "3" && <Coordonnee />}
        {ex === "4" && <JeuDe />}
      </div>
    </div>
  );
}
