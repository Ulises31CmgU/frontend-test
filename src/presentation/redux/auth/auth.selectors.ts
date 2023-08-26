import { createSelector } from "@reduxjs/toolkit";

export const selectAuth = (state: any) => state.auth;

export const selectIsLoggedIn = createSelector(
  [selectAuth],
  (auth) => !!auth.token
);
