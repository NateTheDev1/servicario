import { Timestamp } from "../db/index";

export const createCollaboration = ({
  offer: { service, time, toUser, id },
  fromUser,
}) => ({
  serviceId: service.id, // define ID on offer.service
  title: service.title,
  image: service.image,
  time: time * 60 * 60,
  allowedPeople: [fromUser.uid, toUser.uid],
  joinedPeople: [],
  toUser: toUser.uid,
  fromUser: fromUser.uid,
  fromOffer: id,
  createdAt: Timestamp.fromDate(new Date()),
});

export const createMessage = ({ offer: { service, toUser }, fromUser }) => ({
  isRead: false,
  type: "invitation",
  text: `Hello ${toUser}, please join collaboration as soon as possible`,
  cta: "", //Click to action
  toUser: toUser.uid,
  fromUser: {
    name: fromUser.fullName,
    avatar: fromUser.avatar,
  },
  serviceTitle: service.title,
  serviceLink: `/services/${service.id}`,
  createdAt: Timestamp.fromDate(new Date()),
});
