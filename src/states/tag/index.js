import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";

const initialState = {
  data: schema.tags,
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    TagActionCreateTag: (state, action) => {
      state.data = [
        ...state.data,
        { ...action.payload, id: state.data.length + 1 },
      ];
      console.log(state.data.map((tag) => tag.title));
    },
  },
});

export default tagSlice;
