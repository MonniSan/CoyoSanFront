import React from "react";
import "./Modal.css";

<div className="modal" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Nuevo abono</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>
          <div>
            <h2> Abonar al plan </h2>
          </div>
          <div>
            // Aqui va la imagen del sensei // Aqui va el nombre del sensei
          </div>

          <div>
            <label htmlFor="inputState">Abonar la cantidad de:</label>
            <input
              autocomplete="off"
              type="number"
              className={`form-control ${
                errors["saving_amount"] ? "is-invalid" : ""
              }`}
              onChange={handleChange("saving_amount")}
              value={saving_amount}
            />
          </div>
        </p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Aceptar
        </button>
        <button type="button" className="btn btn-primary">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</div>;
