import { ACTIONS } from "./actions";

export interface Action {
    // ACTIONS: ACTIONS,
    type?: ACTIONS | string,
    payload?: string | string[] | Object | any
    // props: ACTIONS
}
export interface Patient {
    id: string | number,
    first_name: string,
    last_name: string,
    blood_type: string,
    phone: string,
    email: string
}