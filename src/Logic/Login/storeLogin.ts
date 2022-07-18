import { createStore } from "redux";
import reducerLogin from "./reducerLogin";

export const storeLogin = createStore(reducerLogin as any)