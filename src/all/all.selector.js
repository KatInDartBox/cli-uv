import { createSelector } from "reselect";

const baseState = state => state.all;

export const AllGetState = createSelector([baseState], state => {
  return state;
});
