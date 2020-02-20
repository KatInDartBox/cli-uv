import { ReduxType } from "./redux.type";

/**
 * @type {(initState:boolean)=>{type:string,payload:any}}
 */
export const ReduxToggle = item => {
  return {
    type: ReduxType.toggle,
    payload: item
  };
};
