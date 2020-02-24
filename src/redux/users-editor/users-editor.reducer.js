import { UsersEditorType } from "./users-editor.type";

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
const UsersEditorReducer = (state = InitState, action) => {
  switch (action.type) {
    case UsersEditorType.toggle:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default UsersEditorReducer;
