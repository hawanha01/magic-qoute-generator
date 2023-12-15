import commentStore, { defaultComment } from "./comment";
import dislikeStore, { defaultDislike } from "./dislike/dislike";
import likeStore, { defaultLike } from "./like";
import qouteStore, { defaultQoute } from "./qoute";
import reportStore, { defaultReport } from "./report";
import tagStore, { defaultTag } from "./tag";
import userStore, { defaultUser } from "./user";

const schema = {
  users: userStore,
  qoutes: qouteStore,
  comments: commentStore,
  likes: likeStore,
  dislikes: dislikeStore,
  reports: reportStore,
  tags: tagStore,
};
export const defaultSchema = {
  defaultUser: defaultUser,
  defaultQoute: defaultQoute,
  defaultComment: defaultComment,
  defaultLike: defaultLike,
  defaultDislike: defaultDislike,
  defaultReport: defaultReport,
  defaultTag: defaultTag,
};
export default schema;
