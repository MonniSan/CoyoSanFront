import React from "react";
import { Link } from "react-router-dom";
import "./Calculator.css";
import { Formik } from "formik";

// stateless component
const Calculator = ({
  validationSchema,
  handleChange,
  goal_name,
  goal_price,
  goal_months,
  submit,
  errors,
  goal,
  message,
  handleForm
}) => (
  <div className="d-flex justify-content-center">
    <div className="home-calculator">
      {!message && (
        <h5>
          Elige tu primer objetivo de ahorro con la práctica calculadora
          financiera que CoyoSan preparó para ti.
        </h5>
      )}
      {message && (
        <div>
          <h5>{message}</h5>
          <Link className="btn btn-outline-success btn-block" to="/signup">
            Registrarse
          </Link>
        </div>
      )}
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          goal_name: "",
          goal_price: 0,
          goal_months: 6
        }}
        onSubmit={submit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            {!isSubmitting && (
              <>
                <div className="form-row">
                  <div className="form group-row col">
                    <label>¿Cuál es tu sueño?</label>
                    <select
                      type="text"
                      placeholder="Sueño"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="goal_name"
                      value={values.goal_name}
                      className="form-control"
                    >
                      <option>¡Elige!</option>
                      <option value="Casa">Casa</option>
                      <option value="Educación">Educación</option>
                      <option value="Retiro">Retiro</option>
                      <option value="Vacaciones">Vacaciones</option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.goal_name && touched.goal_name && (
                      <div>
                        {errors.goal_name} <br />
                        <br />
                      </div>
                    )}
                  </div>
                </div>
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
                        {errors.goal_price} <br />
                        <br />
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form group-row col">
                    <label>¿En cuantos meses quieres lograrlo?</label>
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
                        {errors.goal_months} <br />
                        <br />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-outline-success btn-block"
                  >
                    Calcular
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default Calculator;
