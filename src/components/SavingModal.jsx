import React from "react";
import "./Modal.css";

<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Nuevo abono</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Aceptar
        </button>
        <button type="button" class="btn btn-primary">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</div>;
