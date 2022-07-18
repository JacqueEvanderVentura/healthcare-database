import { combineReducers, compose, createStore } from "redux"
import reducerLogin from "./Login/reducerLogin";
import { reducerPatient } from "./Patient/reducerPatient"

const allReducers = combineReducers({
    patient: reducerPatient,
    login:   reducerLogin
})

const composeEnhancers = ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose;

export const rootStore = createStore(allReducers, composeEnhancers)