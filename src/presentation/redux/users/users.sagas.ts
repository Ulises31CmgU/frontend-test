import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-hot-toast";

import { UsersController } from "../../../modules/users/infraestructure/users.controller";

import { usersGetListRequest, usersGetListSuccess } from "./users.slice";

import { errorHandler } from "../../shared/helper.functions";

function* getUsersList() {
  console.log('asdasdas');
  try {
    const { data } = yield UsersController.getList();
    yield put(usersGetListSuccess(data));
  } catch (error: any) {
    yield toast.error(errorHandler(error));
  }
}

function* onUsersGetListRequest() {
  yield takeLatest(usersGetListRequest.match, getUsersList);
}

export default function* usersSagas() {
  yield all([call(onUsersGetListRequest)]);
}
