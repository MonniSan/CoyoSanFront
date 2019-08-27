import React from "react";
import "./startgame.css";

class Startgame extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    await this.props.getGoal(this.props.token);
  }
  render() {
    return (
      <div class="startgame">
        {this.props.goal &&
          this.props.goal.Savings &&
          this.props.goal.Savings.length === 0 && (
            <>
              <h1>Registro exitoso</h1>
              <h5>
                {" "}
                Hola ! Yo soy tu sensei{" "}
                <strong>{this.props.goal.Sensei.name}</strong> muchas gracias
                por crearme
              </h5>
              <div>
                <p>
                  Tu meta <strong>{this.props.goal.name}</strong> es muy
                  interesante, y se que juntos lograremos hacerla
                  <br />
                  realidad. Para logar tu meta deberas ahorrar
                  <strong> ${this.props.goal.amountToBe} </strong>
                  mensualmente y
                  <br />
                  puedes empezar HOY!
                </p>
              </div>
              <div>
                <p>
                  Realiza tu primer deposito para empezar la aventura.
                  <button> Deposito realizado </button>
                </p>
              </div>
            </>
          )}
      </div>
    );
  }
}

export default Startgame;
