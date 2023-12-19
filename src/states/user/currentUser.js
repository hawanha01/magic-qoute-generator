import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    CurrentUserSetCurrentUser: (state, action) => {
      state.data = action.payload;
    },
    CurrentUserResetCurrentUser: (state) => {
      state.data = null;
    },
  },
});

export default currentUserSlice;
