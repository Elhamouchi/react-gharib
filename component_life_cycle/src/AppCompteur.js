import React from "react";
import Compteur from "./Compteur";
export default class AppCompteur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMonter: false };
    this.monter = () => {
      this.setState({ isMonter: true });
    };
    this.demonter = () => {
      this.setState({ isMonter: false });
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.monter} disabled={this.state.isMonter}>
          Monter
        </button>
        <button onClick={this.demonter} disabled={!this.state.isMonter}>
          Demonter
        </button>
        {this.state.isMonter ? <Compteur /> : null}
      </div>
    );
  }
}
