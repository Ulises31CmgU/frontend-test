import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-hot-toast";

import { PayloadAction } from "@reduxjs/toolkit";
import { AuthController } from "../../../modules/auth/infraestructure/auth.controller";

import { authLoginRequest, authLoginSuccess } from "./auth.slice";
import { AuthLoginRequestData } from "../../../modules/auth/domain/entities/auth.entities";

import { errorHandler } from "../../shared/helper.functions";

function* login(action: PayloadAction<AuthLoginRequestData>) {
  try {
    const { data } = yield AuthController.login(action.payload);
    yield put(authLoginSuccess(data));
    yield toast.success("Login succesfull");
  } catch (error: any) {
    yield toast.error(errorHandler(error));
  }
}

function* onLoginRequest() {
  yield takeLatest(authLoginRequest.match, login);
}

export default function* authSagas() {
  yield all([call(onLoginRequest)]);
}
