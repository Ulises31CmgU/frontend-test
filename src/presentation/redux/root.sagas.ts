import { all, call } from "redux-saga/effects";
import authSagas from "./auth/auth.sagas";
import usersSagas from "./users/users.sagas";

export default function* rootSaga() {
  yield all([call(authSagas), call(usersSagas)]);
}
