import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";
const initialState = {
  data: schema.users,
  id: 1,
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
        (user) => user.id === action.payload.currentUser.id
      );
      if (!user.tagIds.includes(action.payload.tagId)) {
        user.tagIds = [...user.tagIds, action.payload.tagId];
      }
    },
    userActionUnfollowTag: (state, action) => {
      const user = state.data.find((user) => user.id === action.payload.userId);
      const updatedTags = user.tagIds.filter(
        (tagId) => tagId !== action.payload.tagId
      );
      user.tagIds = updatedTags;
    },
    userActionFollowUser: (state, action) => {
      const user = state.data.find(
        (user) => user.id === action.payload.currentUser.id
      );
      if (!user.followingIds.includes(action.payload.userId)) {
        user.followingIds = [...user.followingIds, action.payload.userId];
      }
    },
    userActionUnfollowUser: (state, action) => {
      const user = state.data.find((user) => user.id === action.payload.userId);
      const updateFollowings = user.followingIds.filter(
        (followingId) => followingId !== action.payload.followingId
      );
      user.followingIds = updateFollowings;
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
