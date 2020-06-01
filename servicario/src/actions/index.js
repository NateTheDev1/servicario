import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS } from "../types/index";

import * as api from "../api/index";

export const fetchServices = () => {
  return api.fetchServices().then((services) => ({
    type: FETCH_SERVICES_SUCCESS,
    payload: services,
  }));
};

export const fetchServiceById = (serviceId) => {
  return api.fetchServiceById(serviceId).then((service) => ({
    type: FETCH_SERVICE_SUCCESS,
    payload: service,
  }));
};
