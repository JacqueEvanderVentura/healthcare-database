import { actionsLOGIN } from "./actionsLogin";

const initialState = false;

export default function reducerLogin(state = initialState, action: any) {
  switch (action.type) {
    case actionsLOGIN.SIGNED_IN:
      return state = true;
    case actionsLOGIN.LOGGED_OUT:
      return state = false;

      default:
        return state;
  }
}
