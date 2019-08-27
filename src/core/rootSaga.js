import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { actionTypes as authActions } from "./auth/auth.reducer";
import { actionTypes as goalActions } from "./goal/goal.reducer";

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

function* getGoal(action) {
  try {
    const result = yield call(axios.get, "https://coyosan.herokuapp.com/goal", {
      headers: { Authorization: action.payload }
    });

    yield put({ type: goalActions.GOAL_SUCCESS, payload: result.data });
  } catch (error) {
    yield put({ type: goalActions.GOAL_FAILURE, error });
  }
}

function* saveSaving(action) {
  try {
    console.log(action);
    const result = yield call(
      axios.post,
      "https://coyosan.herokuapp.com/saving",
      { amount: action.payload.amount },
      {
        headers: { Authorization: action.payload.token }
      }
    );

    yield put({ type: goalActions.SAVING_SAVE_SUCCESS, payload: result.data });
  } catch (error) {
    yield put({ type: goalActions.SAVING_SAVE_FAILURE, error });
  } finally {
    yield call(axios.get, "https://coyosan.herokuapp.com/goal/update", {
      headers: { Authorization: action.payload.token }
    });

    yield put({
      type: goalActions.GOAL_REQUEST,
      payload: action.payload.token
    });
  }
}

function* rootSaga() {
  yield takeLatest(authActions.SIGNUP_REQUEST, signup);
  yield takeLatest(authActions.SIGNIN_REQUEST, signin);
  yield takeLatest(goalActions.GOAL_REQUEST, getGoal);
  yield takeLatest(goalActions.SAVING_SAVE_REQUEST, saveSaving);
}

export default rootSaga;
