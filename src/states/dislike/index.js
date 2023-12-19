import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";

const initialState = {
  data: schema.dislikes,
  id: 0,
};

const dislikeSlice = createSlice({
  name: "dislikes",
  initialState,
  reducers: {
    dislikeActionDislikeQoute: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultDislike,
          qouteId: action.payload.qouteId,
          userId: action.payload.currentUser.id,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
    },
    dislikeActionDislikeComment: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultDislike,
          commentId: action.payload.commentId,
          userId: action.payload.currentUser.id,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
    },
    dislikeActionRemoveDislikeFromQoute: (state, action) => {
      const { qouteId, currentUser } = action.payload;
      const updatedDislikes = state.data.filter(
        (dislike) =>
          !(dislike.qouteId === qouteId && dislike.userId === currentUser.id)
      );
      state.data = updatedDislikes;
    },
    dislikeActionRemoveDislikeFromComment: (state, action) => {
      const { commentId, currentUser } = action.payload;
      const updatedDislikes = state.data.filter(
        (dislike) =>
          !(
            dislike.commentId === commentId &&
            dislike.userId === currentUser.id
          )
      );
      state.data = updatedDislikes;
    },
    dislikeActionRemoveDislikesOfQoute: (state, action) => {
      const updatedDislikes = state.data.filter(
        (dislike) => !(dislike.qouteId === action.payload)
      );
      state.data = updatedDislikes;
    },
    dislikeActionRemoveDislikesOfComment: (state, action) => {
      const updatedDislikes = state.data.filter(
        (dislike) => !(dislike.commentId === action.payload)
      );
      state.data = updatedDislikes;
    },
  },
});

export default dislikeSlice;
