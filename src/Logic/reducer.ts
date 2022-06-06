import { ACTIONS } from "./actions";
import newPatient from "./addPatient";

export default function reducer(state:any, action:any) {
  switch (action.type) {
    case ACTIONS.ADD_PATIENT:
      return [
        ...state,
        newPatient(action.payload.identification, action.payload.fullname, action.payload.bloodType, action.payload.phone, action.payload.email),
      ];

    case ACTIONS.EDIT_PATIENT_NUMBER:
      return state.map((patient: { id: any; }) =>
        action.payload.id === patient.id
          ? { ...patient, title: action.payload.title }
          : patient
      );

    case ACTIONS.EDIT_PATIENT_EMAIL:
      return state.map((patient: { id: any; }) =>
        patient.id === action.payload.id
          ? { ...patient, description: action.payload.description }
          : patient
      );

    case ACTIONS.TOGGLE_STATUS:
      return state.map((patient: { id: any; isDone: any; }) =>
        patient.id === action.payload.id ? { ...patient, isDone: !patient.isDone } : patient
      );

    case ACTIONS.DELETE_PATIENT:
      return state.filter((patient: { id: any; }) => patient.id !== action.payload.id);

    default:
      return state;
  }
}