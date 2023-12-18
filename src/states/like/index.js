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
          qoute_id: action.payload.qouteId,
          user_id: action.payload.current_user.id,
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
          comment_id: action.payload.commentId,
          user_id: action.payload.current_user.id,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
    },
    likeActionRemoveLikeFromQoute: (state, action) => {
      const { qouteId, current_user } = action.payload;
      const updatedLikes = state.data.filter(
        (like) =>
          !(like.qoute_id === qouteId && like.user_id === current_user.id)
      );
      state.data = updatedLikes;
    },
    likeActionRemoveLikeFromComment: (state, action) => {
      const { commentId, current_user } = action.payload;
      const updatedLikes = state.data.filter(
        (like) =>
          !(like.comment_id === commentId && like.user_id === current_user.id)
      );
      state.data = updatedLikes;
    },
    likeActionRemoveLikesOfQoute: (state, action) => {
      const updatedLikes = state.data.filter(
        (like) => !(like.qoute_id === action.payload)
      );
      state.data = updatedLikes;
    },
    likeActionRemoveLikesOfComment: (state, action) => {
      const updatedLikes = state.data.filter(
        (like) => !(like.comment_id === action.payload)
      );
      state.data = updatedLikes;
    },
  },
});

export default likeSlice;
