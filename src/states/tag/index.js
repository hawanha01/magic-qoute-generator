import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";

const initialState = {
  tags: schema.tags,
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export default tagSlice;
