import { actionPATIENT } from "./actionsPATIENT";

const initialState = [
  {
    id: "402-1202426-5",
    firstName: "Jacque",
    lastName: "Ventura",
    gender: "Male",
    bloodType: "A+",
    email: "jacque.evander.ventura@gmail.com",
    phone: "829-927-8886",
    pathologies: ["sida", "sifilis"],
    allergies: ["pb jelly", "nuts"],
    created: Date.now(),
    lastModified: Date.now()
  },
];
export default function reducerPatient(state = initialState, action: any) {
  switch (action.type) {
    case actionPATIENT.ADD_PATIENT:
      return [...state, action.payload];

    case actionPATIENT.EDIT_PATIENT:
      return state.map((patient:any)=>{
        if(patient.id !== action.payload.id){
          return patient
        }
        return {...action.payload, phone: action.payload.phone, email: action.payload.email}
      })

    case actionPATIENT.DELETE_PATIENT:
      return;

    default:
      return state;
  }
}
