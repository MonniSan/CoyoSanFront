import React from "react";
import SavingModal from "../components/SavingModal";
import "./startgame.css";
import PROUD from "../assets/images/gifs/dog_proud.gif";
import HAPPY from "../assets/images/gifs/coyo_happy.gif";
import FINE from "../assets/images/gifs/dog_fine.gif";
import SICK from "../assets/images/gifs/dog_sick.gif";
import RIP from "../assets/images/gifs/dog_rip.gif";

class Startgame extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpenSavingModal: false
    };

    this.handleToggleSavingModal = this.handleToggleSavingModal.bind(this);
  }
  async componentDidMount() {
    await this.props.getGoal(this.props.token);
  }
  handleToggleSavingModal() {
    this.setState({ isOpenSavingModal: !this.state.isOpenSavingModal });
  }

  render() {
    return (
      <div className="startgame">
        {!this.props.isLoading && this.props.goal && (
          <>
            {this.props.goal && this.state.isOpenSavingModal && (
              <SavingModal
                toggleModal={this.handleToggleSavingModal}
                senseiName={this.props.goal.Sensei.name}
                senseiType={this.props.goal.Sensei.Sensei_type.name}
                saveSaving={this.props.saveSaving}
                token={this.props.token}
              ></SavingModal>
            )}
            <h1>Registro exitoso</h1>
            <h5>
              {" "}
              Hola ! Yo soy tu sensei{" "}
              <strong>{this.props.goal.Sensei.name}</strong> muchas gracias por
              crearme
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
                <button onClick={this.handleToggleSavingModal}>
                  {" "}
                  Deposito realizado{" "}
                </button>
              </p>
              <hr />
              {this.props.goal &&
                this.props.goal.Sensei &&
                this.props.goal.Sensei.Sensei_health &&
                this.props.goal.Sensei.Sensei_health.name && (
                  <div>
                    {this.props.goal.Sensei.Sensei_health.name === "PROUD" && (
                      <img
                        src={PROUD}
                        alt={this.props.goal.Sensei.Sensei_health.name}
                      />
                    )}
                    {this.props.goal.Sensei.Sensei_health.name === "HAPPY" && (
                      <img
                        src={HAPPY}
                        alt={this.props.goal.Sensei.Sensei_health.name}
                      />
                    )}
                    {this.props.goal.Sensei.Sensei_health.name === "FINE" && (
                      <img
                        src={FINE}
                        alt={this.props.goal.Sensei.Sensei_health.name}
                      />
                    )}
                    {this.props.goal.Sensei.Sensei_health.name === "SICK" && (
                      <img
                        src={SICK}
                        alt={this.props.goal.Sensei.Sensei_health.name}
                      />
                    )}
                    {this.props.goal.Sensei.Sensei_health.name === "DEAD" && (
                      <img
                        src={RIP}
                        alt={this.props.goal.Sensei.Sensei_health.name}
                      />
                    )}
                  </div>
                )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Startgame;
