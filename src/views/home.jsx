import React from "react";
import Calculator from "../containers/Calculator";
import Hero from "../assets/images/heroCoyoSan.png";
import "../components/Home.css";

const Home = props => (
  <div style={{ backgroundColor: "#EFFFE5" }}>
    <div
      className="container"
      style={{ paddingTop: "30px", paddingBottom: "30px" }}
    >
      <div className="row">
        <div
          className="calculator-area calculator-limit-size rounded col-lg-4 col-md-3 col-sm-12 fixed-position pr-4"
          style={{ border: "1px #fff" }}
        >
          <div class>
            <Calculator></Calculator>
          </div>
        </div>
        <div className="col-lg-8 offset-lg-4 offset-md-5 col-md-7 col-sm-12 pl-4 padding-columns">
          <h4>¡Ahorra para lograr tus sueños con CoyoSan!</h4>
          <h5>
            Ahorra es una cuestión de hábito muy importante para sortear
            dificultades económicas o alcanzar nuestras metas sin necesidad de
            endeudarnos, ya que nos permite:
          </h5>
          <ul>
            <li className="list-option">
              Disfrutar de un futuro financiero estable
            </li>
            <li className="list-option">Lograr nuestros planes y metas</li>
            <li className="list-option">Hacer frente a gastos extraordinarios</li>
            <li className="list-option">Fomentar el hábito de la disciplina</li>
            <li className="list-option">
              Realizar inversiones inteligentes para nuestro patrimonio
            </li>
          </ul>
          <img
            src={Hero}
            alt="CoyoSan logo"
            className="img-fluid float-center p-3"
            alt="CoyoSan"
          />
          <h6 className="text-right">
            ¡No esperes más y toma el primer paso con ayuda de CoyoSan y sus
            amigos!
          </h6>
          <h5 className="text-right">
            Hay muchas posibilidades para las que deberías ahorrar, incluyendo:
            vacaciones, viajes, educación, jubilación, deudas e incluso
            emergencias.
          </h5>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
