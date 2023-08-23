import { all, call, put, takeLatest } from "redux-saga/effects";

import { loginError, loginRequest, loginSuccess } from "./user.slice";

function* login() {
  try {
    yield put(loginSuccess());
  } catch (error: any) {
    yield put(loginError());
  }
}

function* onLoginRequest() {
  yield takeLatest(loginRequest.match, login);
}

export default function* userSagas() {
  yield all([call(onLoginRequest)]);
}
