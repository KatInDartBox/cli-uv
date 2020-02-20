import { createSelector } from "reselect";

const baseState = state => state.redux;

export const ReduxGetState = createSelector([baseState], state => {
  return state;
});
