import React from "react";
export default class Validator extends React.Component {
  constructor() {
    super();
    this.state = { password: "" };
  }
  render() {
    return (
      <div>
        <div>
          <label>Entrer votre password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
        </div>
        {this.state.password.length < 4
          ? "Password doit avoir au moins t 4 caractères"
          : ""}
      </div>
    );
  }
}

// export default class Validator extends React.Component {
//   constructor() {
//     super();
//     this.state = { message: null, password: ""};
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <label>Entrer votre password:</label>
//           <input
//             type="password"
//             value={this.state.password}
//             onChange={(event) =>{
//               event.target.value.length > 4
//                 ? this.setState({ message: null, password: event.target.value })
//                 : this.setState({
//                     message: "Password doit avoir au moins t 4 caractères",
//                     password: event.target.value
//                   });
//                 }
//             }
//           />
//         </div>
//         {this.state.message}
//       </div>
//     );
//   }
// }
