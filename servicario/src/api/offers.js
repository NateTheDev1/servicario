import db from "../db/index";

export const createOffer = (offer) => db.collection("offers").add(offer);
