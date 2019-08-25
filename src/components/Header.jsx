import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/images/logoCoyoSan.jpg";

const Header = () => (
  <div class="nav-header sticky-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-3 col-sm-12">
          <div class="nav-logo">
            <NavLink exact to="/"><img src={Logo} alt="CoyoSan logo" /></NavLink>
          </div>
        </div>
        <div class="col-md-9 d-none d-md-block">
          <div class="main-menu">
            <nav class="nav-menu">
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
