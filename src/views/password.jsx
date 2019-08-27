import React from "react";

const Password = props => (
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
                  <h1>Reestablecer contraseña</h1>
                  <hr></hr>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <form>
                    <div className="form-group row">
                      <label for="username" className="col-4 col-form-label">
                        Contraseña actual o temporal
                      </label>
                      <div className="col-8">
                        <input
                          id="username"
                          name="username"
                          className="form-control here"
                          required="required"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="username" className="col-4 col-form-label">
                        Nueva contraseña
                      </label>
                      <div className="col-8">
                        <input
                          id="username"
                          name="username"
                          className="form-control here"
                          required="required"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="username" className="col-4 col-form-label">
                        Confirma nueva contraseña
                      </label>
                      <div className="col-8">
                        <input
                          id="username"
                          name="username"
                          className="form-control here"
                          required="required"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="offset-4 col-8">
                        <button name="submit" type="submit" className="btn">
                          Actualizar contraseña
                        </button>
                      </div>
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

export default Password;
