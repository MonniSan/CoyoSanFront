import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/images/logoCoyoSan.jpg";

const Header = () => (
  <div className="nav-header sticky-top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3 col-sm-12">
          <div className="nav-logo">
            <NavLink exact to="/"><img src={Logo} alt="CoyoSan logo" /></NavLink>
          </div>
        </div>
        <div className="col-md-9 d-none d-md-block">
          <div className="main-menu">
            <nav className="nav-menu">
              <ul id="nav_menu">
                <li><NavLink data-hover="¡Coyosan espera!" to="/login"><span>Entrar</span></NavLink></li>&emsp;
                <li><NavLink data-hover="¡Vamos!" to="/signup"><span>Registrarse</span></NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
