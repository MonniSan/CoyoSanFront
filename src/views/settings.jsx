import React from 'react';
import '../components/Settings.css'

const Settings = props => (

    <div style={{ backgroundColor: "#EFFFE5" }}>
        <div className="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="row" >
                                <div className="col-md-12">
                                    <h1>Perfil</h1>
                                    <hr>
                                    </hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <form>
                                        <div className="form-group row">
                                            <label for="username" className="col-4 col-form-label">Nombre de usuario</label>
                                            <div className="col-8">
                                                <input id="username" name="username" className="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="name" className="col-4 col-form-label">Nombre</label>
                                            <div className="col-8">
                                                <input id="name" name="name" className="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="lastname" className="col-4 col-form-label">Apellidos</label>
                                            <div className="col-8">
                                                <input id="lastname" name="lastname" className="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email" className="col-4 col-form-label">Email</label>
                                            <div className="col-8">
                                                <input id="email" name="email" className="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="email" className="col-4 col-form-label">Contraseña</label>
                                            <div className="col-8">
                                                <input id="password" name="password" className="form-control here" required="required" type="text" />
                                                <p style={{ marginTop: "5px" }}><a className="anchor" href="/password">Reestablecer contraseña</a></p>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="offset-4 col-8">
                                                <button name="submit" type="submit" className="btn">Actualizar perfil</button>
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