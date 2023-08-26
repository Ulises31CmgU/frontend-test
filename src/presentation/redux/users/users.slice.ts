import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  UserData,
  UsersGetListResponseData,
} from "../../../modules/users/domain/entities/users.entities";

type InitialState = {
  usersList: UserData[];
};

const initialState: InitialState = {
  usersList: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersGetListRequest: (state) => {},
    usersGetListSuccess: (
      state,
      action: PayloadAction<UsersGetListResponseData>
    ) => {
      state.usersList = action.payload.data;
    },
  },
});

export const { usersGetListRequest, usersGetListSuccess } = usersSlice.actions;

export default usersSlice.reducer;
