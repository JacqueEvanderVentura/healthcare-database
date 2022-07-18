import { actionPATIENT } from "./actionsPatient";

const initialState = [{id:'402-1202426-5',firstName: 'Jacque', lastName: 'Evander', bloodType: 'A+', phone: '(829) 927-8886', email:'jacque.evander.ventura@gmail.com', pathologies: 'diabetes, cancer'}];

export default function reducerPatient(state = initialState, action: any) {
  switch (action.type) {
    case actionPATIENT.ADD_PATIENT:
      return [...state, {id: action.payload.id, firstName: action.payload.firstName, lastName: action.payload.lastName, bloodType: action.payload.bloodType, phone: action.payload.phone, email: action.payload.email, pathologies: action.payload.pathologies}];

    case actionPATIENT.EDIT_PATIENT:
      state =  state.filter(patient => patient.id !== action.payload.prevId);
         return [...state, {id: action.payload.id, firstName: action.payload.firstName, lastName: action.payload.lastName, bloodType: action.payload.bloodType, phone: action.payload.phone, email: action.payload.email, pathologies: action.payload.pathologies}];

    case actionPATIENT.DELETE_PATIENT:
        return state.filter(patient => patient.id !== action.payload.id)

    default:
      return state;
  }
}
