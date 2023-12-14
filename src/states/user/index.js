import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";

const initialState = {
  users: schema.users,
  current_user: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(state.users.users, action.payload);
    },
    loginUser: (state, action) => {
      state.users.current_user = action.payload;
    },
    likeQoute: (state, action) => {
      console.log(state.users.users, action.payload);
    },
    dislikeQoute: (state, action) => {
      console.log(state.users.users, action.payload);
    },
    likeComment: (state, action) => {
      console.log(state.users.users, action.payload);
    },
    dislikeComment: (state, action) => {
      console.log(state.users.users, action.payload);
    },
    followTag: (state, action) => {
      console.log(state.users.users, action.payload);
    },
    unfollowTag: (state, action) => {
      console.log(state.users.users, action.payload);
    },
    followUser: (state, action) => {
      console.log(state.users.users, action.payload);
    },
    unfollowUser: (state, action) => {
      console.log(state.users.users, action.payload);
    },
  },
});

export default userSlice;
