/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { connect } from "react-redux";
import { ajouter_article, vider_panier } from "./actions/actionsFruit";
import "./App.css";
import ListFruits from "./ListFruits";

function App(props) {
  const [nomFruit, setNomFruit] = useState("");
  return (
    <div className="container">
      <label htmlFor="fruit">fruit</label>
      <input
        type="text"
        value={nomFruit}
        onChange={(e) => {
          setNomFruit(e.target.value);
        }}
      />

      <button
        onClick={() => {
          props.ajouter_article(nomFruit);
          setNomFruit("");
        }}
      >
        Ajouter
      </button>

      <ListFruits />
      <button
        onClick={() => {
          props.vider_panier();
          setNomFruit("");
        }}
      >
        vider liste
      </button>
    </div>
  );
}
// const mapDispatchToProps = {
//   ajouter_article,
//   vider_panier,
// };

function mapDispatchToProps(dispatch) {
  return {
    ajouter_article: function (nomFruit) {
        dispatch(ajouter_article(nomFruit));
    },

    vider_panier: function () {
      dispatch(vider_panier());
    },
  };
}
export default connect(null, mapDispatchToProps)(App);
