import { createAction } from "@reduxjs/toolkit";

export const likeActionLikeQoute = createAction("likes/likeActionLikeQoute");
export const likeActionRemoveLikeFromQoute = createAction(
  "likes/likeActionRemoveLikeFromQoute"
);
export const likeActionRemoveLikesOfQoute = createAction(
  "likes/likeActionRemoveLikesOfQoute"
);
