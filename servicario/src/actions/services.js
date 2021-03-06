import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE,
  FETCH_USER_SERVICES_SUCCESS,
} from "../types/index";

import * as api from "../api/index";

export const fetchServices = () => (dispatch) => {
  return api.fetchServices().then((services) =>
    dispatch({
      type: FETCH_SERVICES_SUCCESS,
      payload: services,
    })
  );
};

export const fetchUserServices = (userId) => (dispatch) =>
  api
    .fetchUserServices(userId)
    .then((services) =>
      dispatch({ type: FETCH_USER_SERVICES_SUCCESS, payload: services })
    );

export const fetchServiceById = (serviceId) => (dispatch, getState) => {
  const lastService = getState().selectedService.item;

  if (lastService.id && lastService.id === serviceId) {
    return Promise.resolve();
  }

  dispatch({ type: REQUEST_SERVICE });
  return api.fetchServiceById(serviceId).then(async (service) => {
    const user = await service.user.get();
    service.user = user.data();
    service.user.id = user.id;

    dispatch({
      type: FETCH_SERVICE_SUCCESS,
      payload: service,
    });
  });
};

export const createService = (newService, userId) => {
  newService.price = parseInt(newService.price, 10);
  newService.user = api.createRef("profiles", userId);
  console.log(newService);
  return api.createService(newService);
};
