import { createSelector } from "reselect";

const baseState = state => state.usersAdmin;

export const UsersAdminGetState = createSelector([baseState], state => {
  return state;
});
