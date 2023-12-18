import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";
const initialState = {
  data: schema.qoutes,
  id: 0,
};

const qouteSlice = createSlice({
  name: "qoutes",
  initialState,
  reducers: {
    qouteActionAddQoute: (state, action) => {
      const currentDate = new Date();
      const currentTime = currentDate.toISOString();
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultQoute,
          ...action.payload.values,
          id: state.id + 1,
          user_id: action.payload.current_user.id,
          date: currentDate.toLocaleDateString(),
          time: currentTime.slice(11, 19),
        },
      ];
      state.id = state.id + 1;
    },
    qouteActionDeleteQoute: (state, action) => {
      const updatedQoutes = state.data.filter(
        (qoute) => !(qoute.id === action.payload)
      );
      state.data = updatedQoutes;
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
    qouteActionAddReportToQoute: (state, action) => {
      const qoute = state.data.find(
        (qoute) => qoute.id === action.payload.qouteId
      );
      qoute.report_ids = [...qoute.report_ids, action.payload.reportId];
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
