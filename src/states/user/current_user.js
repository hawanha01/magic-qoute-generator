import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const currentUserSlice = createSlice({
  name: "current_user",
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
