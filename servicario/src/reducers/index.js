import services from "./services";
import selectedService from "./selectedService";
import auth from "./auth";
import { combineReducers } from "redux";

const serviceApp = combineReducers({
  services,
  selectedService,
  auth,
});

export default serviceApp;
