import db from "../db/index";

export const createCollaboration = (collab) =>
  db
    .collection("collaborations")
    .add(collab)
    .then((docRef) => docRef.id);

export const createMessage = (message) =>
  db
    .collection("profiles")
    .doc(message.toUser)
    .collection("messages")
    .add(message);

export const subscribeToMessages = (userId, callback) =>
  db
    .collection("profiles")
    .doc(userId)
    .collection("messages")
    .onSnapshot((snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    });
