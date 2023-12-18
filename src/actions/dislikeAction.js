import { createAction } from "@reduxjs/toolkit";

export const dislikeActionDislikeQoute = createAction(
  "dislikes/dislikeActionDislikeQoute"
);
export const dislikeActionRemoveDislikeFromQoute = createAction(
  "dislikes/dislikeActionRemoveDislikeFromQoute"
);
export const dislikeActionRemoveDislikesOfQoute = createAction("dislikes/dislikeActionRemoveDislikesOfQoute")