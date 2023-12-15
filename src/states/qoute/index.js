import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";
const initialState = {
  qoutes: schema.qoutes,
};

const qouteSlice = createSlice({
  name: "qoutes",
  initialState,
  reducers: {
    addQoute: (state, action) => {
      state.qoutes = [
        ...state.qoutes,
        {
          ...defaultSchema.defaultQoute,
          ...action.payload.values,
          id: state.qoutes.length + 1,
          user_id: action.payload.current_user.id,
        },
      ];
    },
    deleteQoute: (state, action) => {
      console.log(state, action.payload);
    },
    addLike: (state, action) => {
      const qoute = state.qoutes.find(
        (qoute) => qoute.id === action.payload.qouteId
      );
      qoute.like_ids = [...qoute.like_ids, action.payload.likeId];
    },
    removeLikeFromQoute: (state, action) => {
      const { qouteId, like } = action.payload;
      const updatedQoutes = state.qoutes.map((qoute) => {
        if (qoute.id === qouteId) {
          return {
            ...qoute,
            like_ids: qoute.like_ids.filter((id) => id !== like.id),
          };
        }
        return qoute;
      });
      state.qoutes = updatedQoutes;
    },
    addDislike: (state, action) => {
      const qoute = state.qoutes.find(
        (qoute) => qoute.id === action.payload.qouteId
      );
      qoute.dislike_ids = [...qoute.dislike_ids, action.payload.dislikeId];
    },
    removeDislikeFromQoute: (state, action) => {
      const { qouteId, dislike } = action.payload;
      const updatedQoutes = state.qoutes.map((qoute) => {
        if (qoute.id === qouteId) {
          return {
            ...qoute,
            dislike_ids: qoute.dislike_ids.filter((id) => id !== dislike.id),
          };
        }
        return qoute;
      });
      state.qoutes = updatedQoutes;
    },
    addCommentToQoute: (state, action) => {
      const qoute = state.qoutes.find(
        (qoute) => qoute.id === action.payload.qouteId
      );
      qoute.comment_ids = [...qoute.comment_ids, action.payload.commentId];
    },
    reportQoute: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export default qouteSlice;
