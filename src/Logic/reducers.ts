import { ACTIONS } from "./actions";
import { Action } from "./models";
import { addPatient } from "./implementations";

const initialState=[{}];

export function reducerPatient(state = initialState, action: Action){
    switch(action){
        case ACTIONS.ADD_PATIENT:
            return [
              ...state,
              addPatient(
                action.payload.identification,
                action.payload.first_name,
                action.payload.last_name,
                action.payload.blood_type,
                action.payload.phone,
                action.payload.email
              ),
            ];
        
        case ACTIONS.EDIT_IDENTIFICATION:
            return null;
        
        case ACTIONS.EDIT_FIRST_NAME:
            return null;
        
        case ACTIONS.EDIT_LAST_NAME:
            return null;
        
        case ACTIONS.EDIT_BLOOD_TYPE:
            return null;
        
        case ACTIONS.EDIT_PHONE:
            return null;
        
        case ACTIONS.EDIT_EMAIL:
            return null;
    }
}