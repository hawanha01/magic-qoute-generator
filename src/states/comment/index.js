import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";

const initialState = {
  data: schema.comments,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentActionAddComment: (state, action) => {
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
          ...defaultSchema.defaultComment,
          ...action.payload.values,
          user_id: action.payload.current_user.id,
          qoute_id: action.payload.qouteId,
          id: state.data.length + 1,
        },
      ];
    },
    commentActionDeleteComment: (state, action) => {
      const { qouteId, current_user } = action.payload;
      const updatedComments = state.data.filter(
        (comment) =>
          !(comment.qoute_id === qouteId && comment.user_id === current_user.id)
      );
      state.data = updatedComments;
    },
    likeComment: (state, action) => {
      console.log(state, action.payload);
    },
    dislikeComment: (state, action) => {
      console.log(state, action.payload);
    },
    reportComment: (state, action) => {
      console.log(state, action.payload);
    },
    commentActionDeleteCommentsOfQoute: (state, action) => {
      const updatedComments = state.data.filter(
        (comment) => !(comment.qoute_id === action.payload)
      );
      state.data = updatedComments;
    },
  },
});

export default commentSlice;
