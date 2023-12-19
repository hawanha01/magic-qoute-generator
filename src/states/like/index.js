import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";

const initialState = {
  data: schema.likes,
  id: 0,
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    likeActionLikeQoute: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultLike,
          qouteId: action.payload.qouteId,
          userId: action.payload.currentUser.id,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
    },
    likeActionLikeComment: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultLike,
          commentId: action.payload.commentId,
          userId: action.payload.currentUser.id,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
    },
    likeActionRemoveLikeFromQoute: (state, action) => {
      const { qouteId, currentUser } = action.payload;
      const updatedLikes = state.data.filter(
        (like) =>
          !(like.qouteId === qouteId && like.userId === currentUser.id)
      );
      state.data = updatedLikes;
    },
    likeActionRemoveLikeFromComment: (state, action) => {
      const { commentId, currentUser } = action.payload;
      const updatedLikes = state.data.filter(
        (like) =>
          !(like.commentId === commentId && like.userId === currentUser.id)
      );
      state.data = updatedLikes;
    },
    likeActionRemoveLikesOfQoute: (state, action) => {
      const updatedLikes = state.data.filter(
        (like) => !(like.qouteId === action.payload)
      );
      state.data = updatedLikes;
    },
    likeActionRemoveLikesOfComment: (state, action) => {
      const updatedLikes = state.data.filter(
        (like) => !(like.commentId === action.payload)
      );
      state.data = updatedLikes;
    },
  },
});

export default likeSlice;
