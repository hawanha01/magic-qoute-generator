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
          userId: action.payload.currentUser.id,
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
      qoute.likeIds = [...qoute.likeIds, action.payload.likeId];
    },
    qouteActionRemoveLikeFromQoute: (state, action) => {
      const { qouteId, like } = action.payload;
      const updatedQoutes = state.data.map((qoute) => {
        if (qoute.id === qouteId) {
          return {
            ...qoute,
            likeIds: qoute.likeIds.filter((id) => id !== like.id),
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
      qoute.dislikeIds = [...qoute.dislikeIds, action.payload.dislikeId];
    },
    qouteActionRemoveDislikeFromQoute: (state, action) => {
      const { qouteId, dislike } = action.payload;
      const updatedQoutes = state.data.map((qoute) => {
        if (qoute.id === qouteId) {
          return {
            ...qoute,
            dislikeIds: qoute.dislikeIds.filter((id) => id !== dislike.id),
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
      qoute.commentIds = [...qoute.commentIds, action.payload.commentId];
    },
    qouteActionAddReportToQoute: (state, action) => {
      const qoute = state.data.find(
        (qoute) => qoute.id === action.payload.qouteId
      );
      qoute.reportIds = [...qoute.reportIds, action.payload.reportId];
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
