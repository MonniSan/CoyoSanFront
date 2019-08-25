import React from 'react'

const Password = props => (

    <div style={{ backgroundColor: "#EFFFE5" }}>
        <div class="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="row" >
                                <div class="col-md-12">
                                    <h1>Reestablecer contraseña</h1>
                                    <hr>
                                    </hr>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <form>
                                        <div class="form-group row">
                                            <label for="username" class="col-4 col-form-label">Contraseña actual</label>
                                            <div class="col-8">
                                                <input id="username" name="username" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="username" class="col-4 col-form-label">Nueva contraseña</label>
                                            <div class="col-8">
                                                <input id="username" name="username" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="username" class="col-4 col-form-label">Confirma nueva contraseña</label>
                                            <div class="col-8">
                                                <input id="username" name="username" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="offset-4 col-8">
                                                <button name="submit" type="submit" class="btn">Actualizar contraseña</button>
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
)

export default Password