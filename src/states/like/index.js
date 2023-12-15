import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";

const initialState = {
  likes: schema.likes,
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    likeQoute: (state, action) => {
      state.likes = [
        ...state.likes,
        {
          ...defaultSchema.defaultLike,
          qoute_id: action.payload.qouteId,
          user_id: action.payload.current_user.id,
          id: state.likes.length + 1,
        },
      ];
    },
    removeLike: (state, action) => {
      const { qouteId, current_user } = action.payload;
      const updatedLikes = state.likes.filter(
        (like) =>
          !(like.qoute_id === qouteId && like.user_id === current_user.id)
      );
      state.likes = updatedLikes;
    },
  },
});

export default likeSlice;
