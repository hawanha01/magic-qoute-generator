import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current_user: null,
};

const currentUserSlice = createSlice({
  name: "current_user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.current_user = action.payload;
    },
    resetCurrentUser: (state) => {
      state.current_user = null;
    },
  },
});

export default currentUserSlice;
