import React from "react";
export default function ResultatList({resultats, handleClick }) {
  function handleClickItem(id) {
    handleClick(id);
  }
  return (
    <div className="Child">
      <h1>composant ResultatList</h1>
      {resultats.length === 0 ? (
        <p>pas de resultats</p>
      ) : (
        <div className="list">
          <ul>
            {resultats.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    handleClickItem(item);
                  }}
                >
                  {item.nom}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
