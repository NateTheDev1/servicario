import { FETCH_SERVICES_SUCCESS } from "../types/index";

const INITIAL_STATE = { items: [] };

const servicesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default servicesReducer;
