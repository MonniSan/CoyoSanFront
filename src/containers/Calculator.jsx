import React from 'react';
import Calculator from '../components/Calculator';
import Loading from '../components/Loading';

class CalculatorContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goal_name: '',
            goal_price: 0,
            goal_months: 0,
            isLoading: false,
            errors: {}
        }
    }

    handleChange(property) {
        return (event) => {
            this.setState({ [property]: event.target.value });
        }
    }

    submit() {
        const { goal_name, goal_price, goal_months } = this.state;

        let errors = {};

        if (goal_price <= 0) {
            errors['goal_price'] = 'Proporciona una cantidad o monto válido.';
        }

        if (goal_months < 6) {
            errors['goal_months'] = 'Elige una meta a mediano o largo plazo.';
        }

        if (!goal_name) {
            errors['goal_name'] = 'El nombre es obligatorio.';
        }

        if (Object.keys(errors).length) {
            this.setState({ errors });
        } else {
            // Caso todo chido, voy al servidor
            this.setState({ isLoading: true });

            
        }
    }

    render() {
        const { handleChange, submit } = this;
        const { isLoading } = this.state;

        return (
            isLoading ?
                <Loading /> :
                <Calculator {...this.state} handleChange={handleChange.bind(this)} submit={submit.bind(this)} />
        );
    }
}

export default CalculatorContainer;