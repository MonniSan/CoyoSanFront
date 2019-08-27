import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Login.css";
import { Formik } from "formik";

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
                  <Formik
                    onSubmit={props.signin}
                    validationSchema={props.validationSchema}
                    initialValues={{
                      mail: "",
                      password: ""
                    }}
                  >
                    {({
                      values,
                      errors,
                      status,
                      touched,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                          <label for="email" className="col-4 col-form-label">
                            Email
                          </label>
                          <div className="col-8">
                            <input
                              autocomplete="off"
                              className="form-control here"
                              type="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="mail"
                              value={values.mail}
                            />
                            {errors.mail && touched.mail && (
                              <div>
                                <strong>{errors.mail}</strong> <br />
                                <br />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label for="email" className="col-4 col-form-label">
                            Contraseña
                          </label>
                          <div className="col-8">
                            <input
                              autocomplete="off"
                              className="form-control here"
                              type="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="password"
                              value={values.password}
                            />
                            {errors.password && touched.password && (
                              <div>
                                <strong>{errors.password}</strong> <br />
                                <br />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-8">
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
                    )}
                  </Formik>
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
