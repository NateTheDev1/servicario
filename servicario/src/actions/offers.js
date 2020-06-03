import * as api from "../api/index";
import { FETCH_OFFERS_SUCCESS } from "../types/index";

export const createOffer = (offer) => api.createOffer(offer);

const extractDataFromOffer = async (offer, userType) => {
  const service = await offer.service.get();
  const user = await offer[userType].get();
  offer.service = service.data();
  offer[userType] = user.data();

  return offer;
};

export const fetchSentOffers = (userId) => (dispatch) => {
  return api.fetchSentOffers(userId).then(async (offers) => {
    const mappedOffers = await Promise.all(
      offers.map((offer) => extractDataFromOffer(offer, "toUser"))
    );
    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      payload: mappedOffers,
      offersType: "sent",
    });
    return offers;
  });
};

export const fetchReceivedOffers = (userId) => (dispatch) => {
  return api.fetchReceivedOffers(userId).then(async (offers) => {
    const mappedOffers = await Promise.all(
      offers.map((offer) => extractDataFromOffer(offer, "fromUser"))
    );
    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      payload: mappedOffers,
      offersType: "received",
    });
    return offers;
  });
};
