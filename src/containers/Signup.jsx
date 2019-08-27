import { connect } from "react-redux";
import * as Yup from "yup";
import { actionTypes as calculatorTypes } from "../core/calculator/calculator.reducer";
import { actionTypes as authTypes } from "../core/auth/auth.reducer";
import Signup from "../views/signup";

const validationSchema = Yup.object().shape({
  name: Yup.string("Dato necesario")
    .min(3, "Dato necesario")
    .required("Dato necesario"),
  mail: Yup.string("Dato necesario")
    .email("Dato necesario")
    .min(3, "Dato necesario")
    .required("Dato necesario"),
  password: Yup.string().required("Se necesita contraseña"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Las contraseñas no coinciden"
  ),
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
    .required("Se necesita escribir el precio"),
  sensei_name: Yup.string("Dato necesario")
    .min(3, "Dato necesario")
    .required("Dato necesario"),
  sensei_type_id: Yup.number("Dato necesario").required("Dato necesario")
});

const mapStateToProps = state => ({
  goal_name: state.calculator.goal_name,
  goal_price: state.calculator.goal_price,
  goal_months: state.calculator.goal_months,
  validationSchema
});
const mapDispatchToProps = dispatch => ({
  setCalculator: values =>
    dispatch({
      type: calculatorTypes.SET_CALCULATOR,
      payload: values
    }),
  signup: values =>
    dispatch({
      type: authTypes.SIGNUP_REQUEST,
      payload: values
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
