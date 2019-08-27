import React from "react";
import Calculator from "../components/Calculator";
import Loading from "../components/Loading";
import * as Yup from "yup";

class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(property) {
    return event => {
      this.setState({ [property]: event.target.value });
    };
  }

  submit(values) {
    const { goal_price, goal_months } = values;
    // Caso todo chido, voy al servidor
    const precision = Math.pow(10, 2);
    const regularAmountToBe = goal_price / goal_months;
    const regularAmountToBeRounded =
      Math.ceil(regularAmountToBe * precision) / precision;
    this.setState({
      message: `Necesitas ahorrar durante ${goal_months} meses la cantidad de $${regularAmountToBeRounded}`
    });
  }

  render() {
    const { handleChange, submit, handleForm } = this;
    const { isLoading } = this.state;
    const validationSchema = Yup.object().shape({
      goal_name: Yup.string("Se necesita una meta")
        .min(3, "Se necesita una meta")
        .required("Se necesita una meta"),
      goal_months: Yup.number("Dato inválido")
        .positive("Dato inválido")
        .min(6, "Se necesita más de 6 meses")
        .required("Se necesita un plazo de tiempo"),
      goal_price: Yup.number("Dato inválido")
        .positive("Dato inválido")
        .min(1, "Se necesita una cantidad más grande")
        .required("Se necesita escribir el precio")
    });

    return isLoading ? (
      <Loading />
    ) : (
      <Calculator
        {...this.state}
        handleChange={handleChange}
        submit={submit}
        handleForm={handleForm}
        validationSchema={validationSchema}
      />
    );
  }
}

export default CalculatorContainer;
