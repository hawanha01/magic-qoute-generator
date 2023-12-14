import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";

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
        { ...action.payload.qoute, user_id: action.payload.current_user.id },
      ];
    },
    deleteQoute: (state, action) => {
      console.log(state, action.payload);
    },
    likeQoute: (state, action) => {
      console.log(state, action.payload);
    },
    dislikeQoute: (state, action) => {
      console.log(state, action.payload);
    },
    reportQoute: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export default qouteSlice;
