import { combineReducers } from "redux";
import userSlice from "../states/user";
import qouteSlice from "../states/qoute";
import commentSlice from "../states/comment";
import tagSlice from "../states/tag";
import currentUserSlice from "../states/user/currentUser";
import likeSlice from "../states/like";
import dislikeSlice from "../states/dislike";
import reportSlice from "../states/report";

const RootReducer = combineReducers({
  users: userSlice.reducer,
  qoutes: qouteSlice.reducer,
  comments: commentSlice.reducer,
  tags: tagSlice.reducer,
  currentUser: currentUserSlice.reducer,
  likes: likeSlice.reducer,
  dislikes: dislikeSlice.reducer,
  reports: reportSlice.reducer,
});

export default RootReducer;
