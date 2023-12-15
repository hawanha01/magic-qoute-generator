import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";

const initialState = {
  comments: schema.comments,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [
        ...state.comments,
        {
          ...defaultSchema.defaultComment,
          ...action.payload.values,
          user_id: action.payload.current_user.id,
          qoute_id: action.payload.qouteId,
          id: state.comments.length + 1,
        },
      ];
    },
    deleteComment: (state, action) => {
      console.log(state, action.payload);
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
  },
});

export default commentSlice;
