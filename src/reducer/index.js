import { combineReducers } from "redux";
import userSlice from "../states/user";
import qouteSlice from "../states/qoute";
import commentSlice from "../states/comment";
import tagSlice from "../states/tag";

const RootReducer = combineReducers({
  users: userSlice.reducer,
  qoutes: qouteSlice.reducer,
  comments: commentSlice.reducer,
  tags: tagSlice.reducer,
});

export default RootReducer;
