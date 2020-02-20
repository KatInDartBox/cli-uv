import { UsersAdminType } from "./users-admin.type";

const InitState = {
  // items: [],
  // itemsCount: 0
};

/**
 * @typedef {{
 * items:any[],
 * itemsCount:number
 * }} State
 */

/**
 * @typedef {{type:string,payload:any}} Action
 */

/**
 * @type {(state:State,action:Action)=>VoidFunction}
 */
const UsersAdminReducer = (state = InitState, action) => {
  switch (action.type) {
    case UsersAdminType.toggle:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default UsersAdminReducer;
