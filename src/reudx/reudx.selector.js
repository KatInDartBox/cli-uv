import { createSelector } from "reselect";

const baseState = state => state.reudx;

export const ReudxGetState = createSelector([baseState], state => {
  return state;
});
