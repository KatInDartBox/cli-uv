import { AllType } from "./all.type";

/**
 * @type {(initState:boolean)=>{type:string,payload:any}}
 */
export const AllToggle = item => {
  return {
    type: AllType.toggle,
    payload: item
  };
};
