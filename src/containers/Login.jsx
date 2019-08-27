import { connect } from "react-redux";
import * as Yup from "yup";
import { actionTypes as calculatorTypes } from "../core/calculator/calculator.reducer";
import { actionTypes as authTypes } from "../core/auth/auth.reducer";
import Signup from "../views/login";

const validationSchema = Yup.object().shape({
  mail: Yup.string("Dato necesario")
    .email("Dato necesario")
    .min(3, "Dato necesario")
    .required("Dato necesario"),
  password: Yup.string().required("Se necesita contraseña")
});

const mapStateToProps = state => ({
  validationSchema
});
const mapDispatchToProps = dispatch => ({
  signin: values =>
    dispatch({
      type: authTypes.SIGNIN_REQUEST,
      payload: values
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
