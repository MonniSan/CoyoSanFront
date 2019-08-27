import React from "react";
import "../components/Settings.css";
import axios from "axios";
import { Formik } from "formik";
import DOG from "../assets/images/preview/DOG.png";
import TIGGER from "../assets/images/preview/TIGGER.png";
import DRAGON from "../assets/images/preview/DRAGON.png";
import "./signup.css";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  async componentDidMount() {
    const result = await axios.get(
      "https://coyosan.herokuapp.com/sensei-types"
    );
    this.setState({ items: result.data });
  }

  render() {
    const { goal_name, goal_price, goal_months } = this.props;
    return (
      <div className="signup">
        <div className="signup-senseiTypes-list">
          <Formik
            onSubmit={this.props.signup}
            validationSchema={this.props.validationSchema}
            initialValues={{
              name: "",
              mail: "",
              password: "",
              confirm: "",
              goal_name,
              goal_price,
              goal_months,
              sensei_name: "",
              sensei_type_id: null
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
              <form
                onSubmit={handleSubmit}
                onChange={() => this.props.setCalculator(values)}
              >
                <h2>Registrate</h2>
                <div className="container">
                  <div className="row">
                    <div className="col-5">
                      <h3>Selecciona un Sensei</h3>
                      {this.state.items &&
                        this.state.items.length > 0 &&
                        this.state.items.map(senseiType => (
                          <div
                            key={senseiType.id}
                            className="form-row signup-senseiTypes-item"
                          >
                            <figure className="signup-senseiTypes-figure">
                              <label>
                                {senseiType.name === "DOG" && (
                                  <img src={DOG} alt={senseiType.name} />
                                )}
                                {senseiType.name === "TIGGER" && (
                                  <img src={TIGGER} alt={senseiType.name} />
                                )}
                                {senseiType.name === "DRAGON" && (
                                  <img src={DRAGON} alt={senseiType.name} />
                                )}
                                <input
                                  autocomplete="off"
                                  type="radio"
                                  name="sensei_type_id"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={senseiType.id}
                                />
                              </label>
                            </figure>
                          </div>
                        ))}
                      <div className="form-row">
                        <div className="form group-row col">
                          <label>¿Cómo llamarás a tu Sensei?</label>
                          <input
                            autocomplete="off"
                            className="form-control"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="sensei_name"
                            value={values.sensei_name}
                          />
                          {errors.sensei_name && touched.sensei_name && (
                            <div>
                              {errors.sensei_name} <br />
                              <br />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <h3>Verifica tu meta</h3>
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-row">
                              <div className="form group-row col">
                                <label>¿Cuál es tu sueño?</label>
                                <input
                                  autocomplete="off"
                                  className="form-control"
                                  type="text"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="goal_name"
                                  value={values.goal_name}
                                />
                                {errors.goal_name && touched.goal_name && (
                                  <div>
                                    <strong>{errors.goal_name}</strong> <br />
                                    <br />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-row">
                              <div className="form group-row col">
                                <label>¿Cuánto cuesta?</label>
                                <input
                                  autocomplete="off"
                                  className="form-control"
                                  type="number"
                                  placeholder="Costo"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="goal_price"
                                  value={values.goal_price}
                                />
                                {errors.goal_price && touched.goal_price && (
                                  <div>
                                    <strong>{errors.goal_price}</strong> <br />
                                    <br />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="col-12">
                            <div className="form-row">
                              <div className="form group-row col">
                                <label>
                                  ¿En cuantos meses quieres lograrlo?
                                </label>
                                <input
                                  autocomplete="off"
                                  className="form-control"
                                  type="number"
                                  placeholder="Meses"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="goal_months"
                                  value={values.goal_months}
                                />
                                {errors.goal_months && touched.goal_months && (
                                  <div>
                                    <strong>{errors.goal_months}</strong> <br />
                                    <br />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <h3>Compartenos algo de ti</h3>
                      <div className="container">
                        <div className="row">
                          <div className="col-6">
                            <div className="form-row">
                              <div className="form group-row col">
                                <label>Nombre completo</label>
                                <input
                                  autocomplete="off"
                                  className="form-control"
                                  type="text"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="name"
                                  value={values.name}
                                />
                                {errors.name && touched.name && (
                                  <div>
                                    <strong>{errors.name}</strong> <br />
                                    <br />
                                  </div>
                                )}
                              </div>
                            </div>
                            <br />

                            <div className="form-row">
                              <div className="form group-row col">
                                <label>Elige una contraseña</label>
                                <input
                                  autocomplete="off"
                                  className="form-control"
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
                          </div>
                          <div className="col-6">
                            <div className="form-row">
                              <div className="form group-row col">
                                <label>Email</label>
                                <input
                                  autocomplete="off"
                                  className="form-control"
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
                            <br />
                            <div className="form-row">
                              <div className="form group-row col">
                                <label>Confirma tu contraseña</label>
                                <input
                                  autocomplete="off"
                                  className="form-control"
                                  type="password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="confirm"
                                  value={values.confirm}
                                />
                                {errors.confirm && touched.confirm && (
                                  <div>
                                    <strong>{errors.confirm}</strong> <br />
                                    <br />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <button className="btn btn-outline-success" type="submit">
                  Registrarme
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
export default Signup;
