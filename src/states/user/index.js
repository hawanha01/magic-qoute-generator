import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";
const initialState = {
  data: schema.users,
  id: 0,
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userActionAddUser: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultUser,
          ...action.payload,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
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
    userActionEditUser: (state, action) => {
      const updatedusers = state.data.map((user) => {
        if (user.id === action.payload.currentUser.id) {
          return {
            ...user,
            ...action.payload.values,
          };
        }
        return user;
      });
      state.data = updatedusers;
    },
    userActionAddReport: (state, action) => {
      const user = state.data.find((user) => user.id === action.payload.userId);
      user.reportIds = [...user.reportIds, action.payload.reportId];
    },
  },
});

export default userSlice;
