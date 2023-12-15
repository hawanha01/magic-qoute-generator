import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";

const initialState = {
  dislikes: schema.dislikes,
};

const dislikeSlice = createSlice({
  name: "dislikes",
  initialState,
  reducers: {
    dislikeQoute: (state, action) => {
      state.dislikes = [
        ...state.dislikes,
        {
          ...defaultSchema.defaultDislike,
          qoute_id: action.payload.qouteId,
          user_id: action.payload.current_user.id,
          id: state.dislikes.length + 1,
        },
      ];
    },
    removeDislike: (state, action) => {
      const { qouteId, current_user } = action.payload;
      const updatedDislikes = state.dislikes.filter(
        (dislike) =>
          !(dislike.qoute_id === qouteId && dislike.user_id === current_user.id)
      );
      state.dislikes = updatedDislikes;
    },
  },
});

export default dislikeSlice;
