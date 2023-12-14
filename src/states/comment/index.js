import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";

const initialState = {
  comments: schema.comments,
};

const commentSlice = createSlice({
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log(state, action.payload);
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
