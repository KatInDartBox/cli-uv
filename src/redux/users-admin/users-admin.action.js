import { UsersAdminType } from "./users-admin.type";

/**
 * @type {(initState:boolean)=>{type:string,payload:any}}
 */
export const UsersAdminToggle = item => {
  return {
    type: UsersAdminType.toggle,
    payload: item
  };
};
