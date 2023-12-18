import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";

const initialState = {
  data: schema.dislikes,
};

const dislikeSlice = createSlice({
  name: "dislikes",
  initialState,
  reducers: {
    dislikeActionDislikeQoute: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultDislike,
          qoute_id: action.payload.qouteId,
          user_id: action.payload.current_user.id,
          id: state.data.length + 1,
        },
      ];
    },
    dislikeActionRemoveDislikeFromQoute: (state, action) => {
      const { qouteId, current_user } = action.payload;
      const updatedDislikes = state.data.filter(
        (dislike) =>
          !(dislike.qoute_id === qouteId && dislike.user_id === current_user.id)
      );
      state.data = updatedDislikes;
    },
    dislikeActionRemoveDislikesOfQoute: (state, action) => {
      const updatedDislikes = state.data.filter(
        (dislike) => !(dislike.qoute_id === action.payload)
      );
      state.data = updatedDislikes;
    },
  },
});

export default dislikeSlice;
