import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";

const initialState = {
  data: schema.tags,
  id: 0,
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    TagActionCreateTag: (state, action) => {
      state.data = [...state.data, { ...action.payload, id: state.id + 1 }];
      state.id = state.id + 1;
    },
  },
});

export default tagSlice;
