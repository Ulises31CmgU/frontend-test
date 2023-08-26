import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = (state: any) => state.loading;

export const selectIsLoading = createSelector(
  [selectLoading],
  (loading) => loading.isLoading
);
