import services from "./services";
import selectedService from "./selectedService";
import { combineReducers } from "redux";

const serviceApp = combineReducers({
  services,
  selectedService,
});

export default serviceApp;
