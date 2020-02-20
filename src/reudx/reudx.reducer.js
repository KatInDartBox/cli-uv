import { ReudxType } from "./reudx.type";

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
const ReudxReducer = (state = InitState, action) => {
  switch (action.type) {
    case ReudxType.toggle:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default ReudxReducer;
