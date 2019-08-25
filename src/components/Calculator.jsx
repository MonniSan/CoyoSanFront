import React from 'react'
import './Calculator.css'

// stateless component
const Calculator = ({ handleChange, goal_name, goal_price, goal_months, submit, errors }) => (
    <div className="d-flex justify-content-center">
        <div className="home-calculator">

            <div className="form-row">
                <div className="form group-row col">
                    <label htmlFor="inputState">¿Cuál es tu sueño?</label>
                    <select type="select" id="inputState" className={`form-control ${errors['goal_name'] ? 'is-invalid' : ''}`} onChange={handleChange('goal_name')} value={goal_name}>
                        <option>¡Elige!</option>
                        <option value="house">Casa</option>
                        <option value="education">Educación</option>
                        <option value="wedding">Retiro</option>
                        <option value="holydays">Vacaciones</option>
                        <option value="other">Otro</option>
                    </select>
                    {
                        errors['goal_name'] ?
                            (<div class="invalid-feedback">{errors['goal_name']}</div>) : null
                    }
                </div>
            </div>

            <div className="form-row">
                <div className="form group-row col">
                    <label htmlFor="inputState">¿Cuánto cuesta?</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <input type="number" className={`form-control ${errors['goal_price'] ? 'is-invalid' : ''}`} onChange={handleChange('goal_price')} value={goal_price} />
                        {
                            errors['goal_price'] ?
                                (<div class="invalid-feedback">{errors['goal_price']}</div>) : null
                        }
                    </div>
                </div>
            </div>

            <div className="form-row">
                <div className="form group-row col">
                    <label htmlFor="inputState">¿En cuántos meses quieres lograrlo?</label>
                    <input type="number" className={`form-control ${errors['goal_months'] ? 'is-invalid' : ''}`} onChange={handleChange('goal_months')} value={goal_months} />
                    {
                        errors['goal_months'] ?
                            (<div class="invalid-feedback">{errors['goal_months']}</div>) : null
                    }
                    {goal_months > 0 ? (<span className="help-text">{(goal_months / 12).toFixed(1)} años</span>) : null}

                </div>
            </div>

            <div className="mt-3">
                <button type="button" class="btn btn-outline-success btn-block" onClick={submit}>
                    Calcular
                </button>
            </div>
        </div>
    </div>
);

export default Calculator