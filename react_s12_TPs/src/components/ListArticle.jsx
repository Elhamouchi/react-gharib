import React, { useState } from "react";
export default function ListArticle() {
  const [id, setId] = useState(0);
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState(0);
  const [articles, setArticles] = useState([]);

  function handlerAddArticle() {
    setArticles([...articles, `${id} | ${designation} | ${prix}`]);
  }
  function handlerOnChangeId(event) {
    setId(event.target.value);
  }
  function handlerOnChangeDesignation(event) {
    setDesignation(event.target.value);
  }
  function handlerOnChangePrix(event) {
    setPrix(event.target.value);
  }
  return (
    
      <div className="list">
        <h2 className="title">Ajout d'un Article</h2>
        <div>
          <label>Id:</label>
          <input type="text" onChange={handlerOnChangeId} value={id} />
        </div>
        <div>
          <label>designation:</label>
          <input
            type="text"
            onChange={handlerOnChangeDesignation}
            value={designation}
          />
        </div>
        <div>
          <label>prix:</label>
          <input type="text" onChange={handlerOnChangePrix} value={prix} />
        </div>
        <div>
          <input type="button" value="Ajouter" onClick={handlerAddArticle} />
        </div>
        <div>
          <h3>liste Articles</h3>
          <ul>
            {
          articles.map((art)=>{
            return <li>{art}</li>
          })}
          </ul>
        </div>
      </div>
    
  );
}
