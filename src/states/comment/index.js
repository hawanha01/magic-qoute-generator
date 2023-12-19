import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";

const initialState = {
  data: schema.comments,
  id: 0,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentActionAddComment: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultComment,
          ...action.payload.values,
          userId: action.payload.currentUser.id,
          qouteId: action.payload.qouteId,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
    },
    commentActionDeleteComment: (state, action) => {
      const updatedComments = state.data.filter(
        (comment) => !(comment.id === action.payload)
      );
      state.data = updatedComments;
    },
    commentActionEditComment: (state, action) => {
      const updatedComments = state.data.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            ...action.payload.values,
          };
        }
        return comment;
      });
      state.data = updatedComments;
    },
    commentActionAddLikeToComment: (state, action) => {
      const comment = state.data.find(
        (comment) => comment.id === action.payload.commentId
      );
      comment.likeIds = [...comment.likeIds, action.payload.likeId];
    },
    commentActionRemoveLikeFromComment: (state, action) => {
      const { commentId, like } = action.payload;
      const updatedComments = state.data.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likeIds: comment.likeIds.filter((id) => id !== like.id),
          };
        }
        return comment;
      });
      state.data = updatedComments;
    },
    commentActionDeleteCommentsOfQoute: (state, action) => {
      const updatedComments = state.data.filter(
        (comment) => !(comment.qouteId === action.payload)
      );
      state.data = updatedComments;
    },
    commentActionAddDislikeToComment: (state, action) => {
      const comment = state.data.find(
        (comment) => comment.id === action.payload.commentId
      );
      comment.dislikeIds = [...comment.dislikeIds, action.payload.dislikeId];
    },
    commentActionRemoveDislikeFromComment: (state, action) => {
      const { commentId, dislike } = action.payload;
      const updatedComments = state.data.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            dislikeIds: comment.dislikeIds.filter((id) => id !== dislike.id),
          };
        }
        return comment;
      });
      state.data = updatedComments;
    },
  },
});

export default commentSlice;
