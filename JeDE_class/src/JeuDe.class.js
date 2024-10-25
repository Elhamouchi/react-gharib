import { Component } from 'react';

export default class JeuDe extends Component {
  state = {
    face: null,
    compteur: 0,
    fine: false,
    result: 0
  };

  handlePlayBTN = () => {
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState({
      fine: false, 
      face:valeur, 
      compteur: this.state.compteur + 1,
      result: this.state.result + valeur
    })
  }

  handleRestBTN = () => {
    this.setState({
      face: null,
      compteur: 0, 
      fine: false 
    });
  };
  render() {
    const imgSrc = "face" + this.state.face + ".png";
    const imgStyle = {width: '200px'}
    return (
      <>
        <h1>Jeu de dé</h1>
        <h3>Result: {this.state.result}</h3>
        <h3>face: {this.state.face}</h3>
        {this.state.face && <img src={imgSrc} style={imgStyle} alt={imgSrc}></img>}
        <h3>nombre d'essais: {this.state.compteur}</h3>
        <p>Braco vous avez trouvez la face cachee</p>
        <button onClick={this.handlePlayBTN}>jouer</button>
        <button onClick={this.handleRestBTN}>Initailiser</button>
      </>
    );
  }
}



