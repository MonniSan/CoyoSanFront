import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = props => (
    <div>
        <label>E-mail</label>
        <input type="email" ></input>
        <label>Contraseña</label>
        <input type="password" ></input>
        <NavLink to="/summary">
            <button>Entrar</button>
        </NavLink>
        <p>Olvidaste tu contraseña haz click <NavLink to="/password">aqui</NavLink></p>
    </div>
)

export default Login
