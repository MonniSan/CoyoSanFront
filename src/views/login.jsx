import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Login.css";

const Login = props => (
  <div style={{ backgroundColor: "#EFFFE5" }}>
    <div
      className="container"
      style={{ paddingTop: "30px", paddingBottom: "30px" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <form>
                    <div className="form-group row">
                      <label for="email" className="col-4 col-form-label">
                        Email
                      </label>
                      <div className="col-8">
                        <input
                          id="email"
                          name="email"
                          className="form-control here"
                          required="required"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="email" className="col-4 col-form-label">
                        Contraseña
                      </label>
                      <div className="col-8">
                        <input
                          id="password"
                          name="password"
                          className="form-control here"
                          required="required"
                          type="text"
                        />
                        <p style={{ paddingTop: "5px" }}>
                          Si olvidaste tu contraseña, haz clic{" "}
                          <NavLink className="anchor" to="/password">
                            aquí
                          </NavLink>
                        </p>
                      </div>
                    </div>
                    <div className="form-group row justify-content-center">
                      <button name="submit" type="submit" className="btn">
                        Entrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
