import { FETCH_SERVICES } from "../types/index";

const INITIAL_STATE = { items: [] };

const servicesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default servicesReducer;
