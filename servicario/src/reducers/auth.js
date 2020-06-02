import { SET_AUTH_USER } from "../types/index";

const INITIAL_STATE = {
  user: null,
  isAuth: false,
  isAuthResolved: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        user: action.payload,
        isAuthResolved: true,
        isAuth: !!action.payload,
      };
    default:
      return state;
  }
};

export default auth;
