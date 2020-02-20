import { ReduxType } from "./redux.type";

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
const ReduxReducer = (state = InitState, action) => {
  switch (action.type) {
    case ReduxType.toggle:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default ReduxReducer;
