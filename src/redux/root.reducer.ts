import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/user.slice";
import loadingReducer from "./loading/loading.slice";

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
});

export default rootReducer;
