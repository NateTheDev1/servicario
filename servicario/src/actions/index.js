import { FETCH_SERVICES_SUCCESS } from "../types/index";

import db from "../db/index";

export const fetchServices = () => {
  return db
    .collection("services")
    .get()
    .then((snapshot) => {
      const services = snapshot.docs.map((doc) => doc.data());

      return {
        type: FETCH_SERVICES_SUCCESS,
        payload: services,
      };
    });
};
