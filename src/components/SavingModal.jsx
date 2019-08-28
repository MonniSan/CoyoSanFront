import React from "react";
import "./Modal.css";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import DOG from "../assets/images/preview/DOG.png";
import TIGGER from "../assets/images/preview/TIGGER.png";
import DRAGON from "../assets/images/preview/DRAGON.png";

const SavingModal = props => (
  <div className="modal" role="dialog" style={{ display: "block" }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Nuevo abono</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={props.toggleModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Formik
          initialValues={{ amount: 0, token: props.token }}
          onSubmit={props.saveSaving}
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
              <div className="modal-body">
                <div>
                  <h2> Abonar al plan </h2>
                </div>
                <div>
                  {props.senseiType === "DOG" && (
                    <img src={DOG} alt={props.senseiType} />
                  )}
                  {props.senseiType === "TIGGER" && (
                    <img src={TIGGER} alt={props.senseiType} />
                  )}
                  {props.senseiType === "DRAGON" && (
                    <img src={DRAGON} alt={props.senseiType} />
                  )}
                </div>
                <div>
                  <label htmlFor="inputState">Abonar la cantidad de:</label>
                  <input
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="amount"
                    value={values.amount}
                  />
                  {errors.amount && touched.amount && (
                    <div>
                      {errors.amount} <br />
                      <br />
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <NavLink to="/summary">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Aceptar
                  </button>
                </NavLink>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={props.toggleModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  </div>
);

export default SavingModal;
