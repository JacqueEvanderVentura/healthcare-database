import { useNavigate } from "react-router-dom";
import { actionLOGIN } from "./actionsLOGIN";

const initialState = [{
    userId: '####',
    firstName: 'NOT-LOGGED',
    lastName: 'NOT-LOGGED',
    isLogged: false,
    lastConnection: Date.now()
}]
export default function reducerLogin(state=initialState, action:any){
    switch(action.type){
        case actionLOGIN.SIGN_IN:
            console.log('LOGGED INNN')
            return {...action.payload, isLogged: true};
        
        case actionLOGIN.LOG_OUT:
            console.log('LOGGED OUT IM OUTTY')

            return {...action.payload, isLogged: false};

        default:
            return state
    }
}