import { createAction } from "@reduxjs/toolkit";

export const dislikeActionDislikeQoute = createAction(
  "dislikes/dislikeActionDislikeQoute"
);
export const dislikeActionDislikeComment = createAction(
  "dislikes/dislikeActionDislikeComment"
);
export const dislikeActionRemoveDislikeFromQoute = createAction(
  "dislikes/dislikeActionRemoveDislikeFromQoute"
);
export const dislikeActionRemoveDislikesOfQoute = createAction(
  "dislikes/dislikeActionRemoveDislikesOfQoute"
);
export const dislikeActionRemoveDislikeFromComment = createAction(
  "dislikes/dislikeActionRemoveDislikeFromComment"
);
export const dislikeActionRemoveDislikesOfComment = createAction(
  "dislikes/dislikeActionRemoveDislikesOfComment"
);
