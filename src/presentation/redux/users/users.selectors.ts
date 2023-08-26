import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state: any) => state.users;

export const selectUsersList = createSelector(
  [selectUsers],
  (users) => users.usersList
);
