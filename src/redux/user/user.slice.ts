/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction) => {},
    loginSuccess: (state, action: PayloadAction) => {},
    loginError: (state, action: PayloadAction) => {},
    logout: (state) => {},
  },
});

export const { loginRequest, loginSuccess, loginError, logout } =
  userSlice.actions;

export default userSlice.reducer;
