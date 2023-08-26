import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AuthLoginRequestData,
  AuthLoginResponseData,
} from "../../../modules/auth/domain/entities/auth.entities";

type InitialState = {
  token: null | string;
};

const initialState: InitialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLoginRequest: (
      state,
      action: PayloadAction<AuthLoginRequestData>
    ) => {},
    authLoginSuccess: (state, action: PayloadAction<AuthLoginResponseData>) => {
      state.token = action.payload.token;
    },
    authLogout: (state) => {
      state.token = null;
    },
  },
});

export const { authLoginRequest, authLoginSuccess, authLogout } =
  authSlice.actions;

export default authSlice.reducer;
