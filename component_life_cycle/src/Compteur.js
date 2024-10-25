import React from "react";
export default class Compteur extends React.Component {
  constructor(props) {
    console.log("constructeur");
    super(props);
    this.state = { compteur: 0 };
    this.incrementer = () => {
      this.setState({ compteur: this.state.compteur + 1 });
    };
    this.decrementer = () => {
      this.setState({ compteur: this.state.compteur - 1 });
    };
  }
  componentDidMount() {
    //cette methode est executé aprés render
    console.log("Component Did mount");
    console.log("--------------------");
  }
  componentDidUpdate() {
    //cette methode est executé aprés mise à jour par setState
    console.log("Component Did update");
    console.log("--------------------");
  }
  componentWillUnmount() {
    console.log("Component est demonté");
  }
  render() {
    console.log("Render");
    return (
      <div style={{ background: "yellow" }}>
        {" "}
        <h3>composant Compteur</h3> <p>compteur:{this.state.compteur}</p>{" "}
        <button onClick={this.incrementer}>Incrementer</button>{" "}
        <button onClick={this.decrementer}>Decrementer</button>{" "}
      </div>
    );
  }
}
