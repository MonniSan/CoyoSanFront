import React from "react";
import "./Modal.css";

<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Goal</h5>
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
            <h2> GOALNAME </h2>
          </div>
          <div>// Aqui va el gif sensei // Aqui va el nombre del sensei</div>

          <div>
            <list>
              <li>Precio de Meta: goal.price</li>
              <li>Acumulado actual: goal.amountAccuReal</li>
              <li>Meses: diffmonth de goal.months</li>
              <li>Salud del sensei: sensei_health.name</li>
              <li> Descripción de Salud: "------------"</li>
              <li> Consejo de tu Sensei: "------------"</li>
            </list>
          </div>
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Regresar
        </button>
        <button type="button" class="btn btn-primary">
          Nuevo deposito
        </button>
      </div>
    </div>
  </div>
</div>;
