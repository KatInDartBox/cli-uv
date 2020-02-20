import { ReudxType } from "./reudx.type";

/**
 * @type {(initState:boolean)=>{type:string,payload:any}}
 */
export const ReudxToggle = item => {
  return {
    type: ReudxType.toggle,
    payload: item
  };
};
