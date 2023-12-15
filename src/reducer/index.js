import { combineReducers } from "redux";
import userSlice from "../states/user";
import qouteSlice from "../states/qoute";
import commentSlice from "../states/comment";
import tagSlice from "../states/tag";
import currentUserSlice from "../states/user/current_user";
import likeSlice from "../states/like";
import dislikeSlice from "../states/dislike";

const RootReducer = combineReducers({
  users: userSlice.reducer,
  qoutes: qouteSlice.reducer,
  comments: commentSlice.reducer,
  tags: tagSlice.reducer,
  current_user: currentUserSlice.reducer,
  likes: likeSlice.reducer,
  dislikes: dislikeSlice.reducer,
});

export default RootReducer;
