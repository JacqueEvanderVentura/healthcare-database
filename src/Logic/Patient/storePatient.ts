import { createStore } from "redux";
import reducerPatient from "./reducerPatient";

export const storePatient = createStore(reducerPatient as any);