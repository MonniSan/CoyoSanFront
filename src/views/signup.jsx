import React from 'react'
import '../components/Settings.css'

/*
class Signup extends React.Component{
    constructor(){
        super()
        this.state = {
            password: '',
            confirm: '',
            passwordIsConfirmed: true
        }

        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeConfirm = this.handleChangeConfirm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangePassword(e){
        this.setState({password: e.target.value})
    }
    handleChangeConfirm(){
        this.setState({confirm: 'lololololol'})
        if(this.state.password !== 'lol') {
            this.setState({passwordIsConfirmed: false})
        } else {
            this.setState({passwordIsConfirmed: true})
        }
    }

    handleSubmit(){
        console.log('ESTOY ENVIANDO: ', this.state)
        // if(this.state.passwordIsConfirmed && otraCondición && asdgaskdfgkafs) {
        //     //envio al api
        // }
        // else {
        //     this.state.message({message: 'No se puede así manito!'})
        // }
    }


    render() {
        return <div class="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <div class="row justify-content-center">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <button onClick={this.handleChangePassword}>Pass</button>
        <button onClick={this.handleChangeConfirm}>Confirmar</button>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <form>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label">Nombre</label>
                                        <div class="col-8">
                                            <input id="name" name="name" class="form-control here" required="required" type="text" />
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
                                            <input onChange={this.handleChangePassword} id="password" name="password" class="form-control here" required="required" type="text" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-4 col-form-label">Confirmar contraseña</label>
                                        <div class="col-8">
                                            <input id="password" name="password" class="form-control here" required="required" type="text" />
                                        </div>
                                        {!this.state.passwordIsConfirmed && <p>NO MACHAN CUATE!!!</p>}
                                    </div>
                                    
                                    <div class="form-group row justify-content-center">
                                        <button name="submit" type="submit" class="btn" onClick={this.handleSubmit}>Registrarse</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
}
*/
const Signup = props => (
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
                                                <input id="email" name="email" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="email" class="col-4 col-form-label">Confirmar contraseña</label>
                                            <div class="col-8">
                                                <input id="email" name="email" class="form-control here" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="offset-4 col-8">
                                                <button name="submit" type="submit" class="btn">Registrarse</button>
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
export default Signup