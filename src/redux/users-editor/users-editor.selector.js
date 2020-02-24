import { createSelector } from "reselect";

const baseState = state => state.usersEditor;

export const UsersEditorGetState = createSelector([baseState], state => {
  return state;
});
