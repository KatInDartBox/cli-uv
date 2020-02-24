import { UsersEditorType } from "./users-editor.type";

/**
 * @type {(initState:boolean)=>{type:string,payload:any}}
 */
export const UsersEditorToggle = item => {
  return {
    type: UsersEditorType.toggle,
    payload: item
  };
};
