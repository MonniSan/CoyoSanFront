import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { actionTypes as authActions } from "./auth/auth.reducer";

function* signup(action) {
  try {
    const result = yield call(
      axios.post,
      "https://coyosan.herokuapp.com/user/signup",
      { ...action.payload }
    );

    yield put({ type: authActions.SIGNUP_SUCCESS, payload: result.data.token });
    console.log(result);
  } catch (error) {
    yield put({ type: authActions.SIGNUP_FAILURE, error });
  }
}

function* signin(action) {
  try {
    console.log(action);
    const result = yield call(
      axios.post,
      "https://coyosan.herokuapp.com/user/login",
      { ...action.payload }
    );

    yield put({ type: authActions.SIGNIN_SUCCESS, payload: result.data.token });
    console.log(result);
  } catch (error) {
    yield put({ type: authActions.SIGNIN_FAILURE, error });
  }
}

function* rootSaga() {
  yield takeLatest(authActions.SIGNUP_REQUEST, signup);
  yield takeLatest(authActions.SIGNIN_REQUEST, signin);
}

export default rootSaga;
