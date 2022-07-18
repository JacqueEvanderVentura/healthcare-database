import { actionLOGIN } from "./actionsLOGIN";

const initialState = false;
export default function reducerLogin(state=initialState, action:any){
    switch(action.type){
        case actionLOGIN.SIGN_IN:
            return;
        
        case actionLOGIN.LOG_OUT:
            return;

        default:
            return state
    }
}