import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";

const initialState = {
  tags: schema.tags,
};

const tagSlice = createSlice({
  initialState,
  reducers: {
    addTag: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export default tagSlice;
