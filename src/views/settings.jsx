import React from 'react';
import '../components/Settings.css'

const Settings = props => (

    <div style={{ backgroundColor: "#EFFFE5" }}>
        <div class="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="row" >
                                <div class="col-md-12">
                                    <h1>Perfil</h1>
                                    <hr>
                                    </hr>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <form>
                                        <div class="form-group row">
                                            <label for="username" class="col-4 col-form-label">Nombre de usuario</label>
                                            <div class="col-8">
                                                <input id="username" name="username" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="name" class="col-4 col-form-label">Nombre</label>
                                            <div class="col-8">
                                                <input id="name" name="name" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="lastname" class="col-4 col-form-label">Apellidos</label>
                                            <div class="col-8">
                                                <input id="lastname" name="lastname" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="email" class="col-4 col-form-label">Email</label>
                                            <div class="col-8">
                                                <input id="email" name="email" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="email" class="col-4 col-form-label">Contraseña</label>
                                            <div class="col-8">
                                                <input id="password" name="password" class="form-control here" required="required" type="text" />
                                                <p style={{ marginTop: "5px" }}><a class="anchor" href="/password">Reestablecer contraseña</a></p>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="offset-4 col-8">
                                                <button name="submit" type="submit" class="btn">Actualizar perfil</button>
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

export default Settings