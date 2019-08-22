import React from 'react';
import '../components/Settings.css'

const Settings = props => (

    <div style={{ backgroundColor: "#E5E9EA" }}>
        <div class="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div class="row" style={{ marginBottom: "15px" }}>
                <div class="col-md-3">
                    <div class="list-group ">
                        <a href="#" class="list-group-item list-group-item-action active settings-menu">Perfil</a>
                        <a href="#" class="list-group-item list-group-item-action settings-menu">Cuenta</a>
                    </div>
                </div>
                <div class="col-md-9">
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
                                                <input id="username" name="username" placeholder="Nombre de usuario" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="name" class="col-4 col-form-label">Nombre</label>
                                            <div class="col-8">
                                                <input id="name" name="name" placeholder="Nombre" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="lastname" class="col-4 col-form-label">Apellidos</label>
                                            <div class="col-8">
                                                <input id="lastname" name="lastname" placeholder="Apellidos" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="email" class="col-4 col-form-label">Email</label>
                                            <div class="col-8">
                                                <input id="email" name="email" placeholder="Email" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="email" class="col-4 col-form-label">Contraseña</label>
                                            <div class="col-8">
                                                <input id="password" name="password" placeholder="Contraseña" class="form-control here" required="required" type="text" />
                                                <a class="anchor" href="/password">Reestablecer contraseña</a>
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