import { AllType } from "./all.type";

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
const AllReducer = (state = InitState, action) => {
  switch (action.type) {
    case AllType.toggle:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default AllReducer;
