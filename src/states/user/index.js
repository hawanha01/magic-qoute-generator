import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";
const initialState = {
  data: schema.users,
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userActionAddUser: (state, action) => {
      // let randomId = Math.floor(Math.random() * 10000);
      // const checkId = state.data.find((qoute) => qoute.id === randomId);
      // do {
      //   if (checkId) {
      //     randomId = Math.floor(Math.random() * 10000);
      //   }
      // } while (checkId);
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultUser,
          ...action.payload,
          id: state.data.length + 1,
        },
      ];
    },
    likeQoute: (state, action) => {
      console.log(state.data.users, action.payload);
    },
    dislikeQoute: (state, action) => {
      console.log(state.data.users, action.payload);
    },
    likeComment: (state, action) => {
      console.log(state.data.users, action.payload);
    },
    dislikeComment: (state, action) => {
      console.log(state.data.users, action.payload);
    },
    userActionFollowTag: (state, action) => {
      const user = state.data.find(
        (user) => user.id === action.payload.current_user.id
      );
      if (!user.tag_ids.includes(action.payload.tagId)) {
        user.tag_ids = [...user.tag_ids, action.payload.tagId];
      }
    },
    userActionUnfollowTag: (state, action) => {
      const user = state.data.find((user) => user.id === action.payload.userId);
      const updatedTags = user.tag_ids.filter(
        (tagId) => tagId !== action.payload.tagId
      );
      user.tag_ids = updatedTags;
    },
    userActionFollowUser: (state, action) => {
      const user = state.data.find(
        (user) => user.id === action.payload.current_user.id
      );
      if (!user.following_ids.includes(action.payload.userId)) {
        user.following_ids = [...user.following_ids, action.payload.userId];
      }
    },
    userActionUnfollowUser: (state, action) => {
      const user = state.data.find((user) => user.id === action.payload.userId);
      const updateFollowings = user.following_ids.filter(
        (following_id) => following_id !== action.payload.following_id
      );
      user.following_ids = updateFollowings;
    },
  },
});

export default userSlice;
