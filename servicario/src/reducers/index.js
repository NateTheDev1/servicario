import services from "./services";
import selectedService from "./selectedService";
import auth from "./auth";
import offers from "./offers";

import { combineReducers } from "redux";

const serviceApp = combineReducers({
  services,
  selectedService,
  auth,
  offers,
});

export default serviceApp;
