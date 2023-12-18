import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";
const initialState = {
  data: schema.qoutes,
};

const qouteSlice = createSlice({
  name: "qoutes",
  initialState,
  reducers: {
    qouteActionAddQoute: (state, action) => {
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
          ...defaultSchema.defaultQoute,
          ...action.payload.values,
          id: state.data.length + 1,
          user_id: action.payload.current_user.id,
        },
      ];
    },
    qouteActionDeleteQoute: (state, action) => {
      const updatedLikes = state.data.filter(
        (qoute) => !(qoute.id === action.payload)
      );
      state.data = updatedLikes;
    },
    qouteActionAddLikeToQoute: (state, action) => {
      const qoute = state.data.find(
        (qoute) => qoute.id === action.payload.qouteId
      );
      qoute.like_ids = [...qoute.like_ids, action.payload.likeId];
    },
    qouteActionRemoveLikeFromQoute: (state, action) => {
      const { qouteId, like } = action.payload;
      const updatedQoutes = state.data.map((qoute) => {
        if (qoute.id === qouteId) {
          return {
            ...qoute,
            like_ids: qoute.like_ids.filter((id) => id !== like.id),
          };
        }
        return qoute;
      });
      state.data = updatedQoutes;
    },
    qouteActionAddDislikeToQoute: (state, action) => {
      const qoute = state.data.find(
        (qoute) => qoute.id === action.payload.qouteId
      );
      qoute.dislike_ids = [...qoute.dislike_ids, action.payload.dislikeId];
    },
    qouteActionRemoveDislikeFromQoute: (state, action) => {
      const { qouteId, dislike } = action.payload;
      const updatedQoutes = state.data.map((qoute) => {
        if (qoute.id === qouteId) {
          return {
            ...qoute,
            dislike_ids: qoute.dislike_ids.filter((id) => id !== dislike.id),
          };
        }
        return qoute;
      });
      state.data = updatedQoutes;
    },
    qouteActionAddCommentToQoute: (state, action) => {
      const qoute = state.data.find(
        (qoute) => qoute.id === action.payload.qouteId
      );
      qoute.comment_ids = [...qoute.comment_ids, action.payload.commentId];
    },
    qouteActionUpdateQoute: (state, action) => {
      const updatedQoutes = state.data.map((qoute) => {
        if (qoute.id === action.payload.qouteId) {
          return {
            ...qoute,
            ...action.payload.values,
          };
        }
        return qoute;
      });
      state.data = updatedQoutes;
    },
    qouteActionReportQoute: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export default qouteSlice;
