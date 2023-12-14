import commentStore from "./comment";
import dislikeStore from "./dislike/dislike";
import likeStore from "./like";
import qouteStore from "./qoute";
import reportStore from "./report";
import tagStore from "./tag";
import userStore from "./user";

const schema = {
  users: userStore,
  qoutes: qouteStore,
  comments: commentStore,
  likes: likeStore,
  dislikes: dislikeStore,
  reports: reportStore,
  tags: tagStore,
};

export default schema;
