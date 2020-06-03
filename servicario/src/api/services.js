import db from "../db/index";

export const fetchServiceById = (serviceId) => {
  return db
    .collection("services")
    .doc(serviceId)
    .get()
    .then((snapshot) => {
      return { id: snapshot.id, ...snapshot.data() };
    });
};

export const fetchServices = () => {
  return db
    .collection("services")
    .get()
    .then((snapshot) => {
      const services = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return services;
    });
};

export const createService = (newService) => {
  return db
    .collection("services")
    .add(newService)
    .then((docRef) => docRef.id);
};

export const fetchUserServices = (userId) => {
  const userRef = db.doc("profiles/" + userId);
  return db
    .collection("services")
    .where("user", "==", userRef)
    .get()
    .then((snapshot) => {
      const services = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return services;
    });
};
