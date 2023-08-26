import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import usersReducer from "./users/users.slice";
import loadingReducer from "./loading/loading.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  loading: loadingReducer,
});

export default rootReducer;
