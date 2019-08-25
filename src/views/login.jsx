import React from 'react'
import '../components/Login.css'

const Login = props => (
    <div style={{ backgroundColor: "#EFFFE5" }}>
        <div class="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <form>
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
                                                <p style={{ paddingTop: "5px" }}>Si olvidaste tu contraseña, haz clic <a class="anchor" href= '# '>aquí</a></p>
                                            </div>
                                        </div>
                                        <div class="form-group row justify-content-center">
                                            <button name="submit" type="submit" class="btn">Entrar</button>
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

export default Login
