import { combineReducers } from "redux";
import auth from "./auth/auth.reducer";
import calculator from "./calculator/calculator.reducer";
import senseiTypes from "./senseiTypes/senseiTypes.reducer";

export default combineReducers({
  auth,
  calculator,
  senseiTypes
});
