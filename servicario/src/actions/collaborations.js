import * as api from "api";
import {
  COLLABORATION_CREATED_FROM_OFFER,
  FETCH_USER_MESSAGES_SUCCESS,
} from "types";

export const collaborate = ({ collaboration, message }) => (dispatch) =>
  api.createCollaboration(collaboration).then((collabId) => {
    message.cta = `/collaborations/${collabId}`;
    api.createMessage(message);
    api.markOfferAsInCollaboration(collaboration.fromOffer);
    dispatch({
      type: COLLABORATION_CREATED_FROM_OFFER,
      payload: collaboration.fromOffer,
      offersType: "sent",
    });
    return collabId;
  });

export const subscribeToMessages = (userId) => (dispatch) =>
  api.subscribeToMessages(userId, (messages) =>
    dispatch({ type: FETCH_USER_MESSAGES_SUCCESS, payload: messages })
  );
