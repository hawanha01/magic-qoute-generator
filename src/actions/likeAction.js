import { createAction } from "@reduxjs/toolkit";

export const likeActionLikeQoute = createAction("likes/likeActionLikeQoute");
export const likeActionLikeComment = createAction(
  "likes/likeActionLikeComment"
);
export const likeActionRemoveLikeFromQoute = createAction(
  "likes/likeActionRemoveLikeFromQoute"
);
export const likeActionRemoveLikeFromComment = createAction(
  "likes/likeActionRemoveLikeFromComment"
);
export const likeActionRemoveLikesOfQoute = createAction(
  "likes/likeActionRemoveLikesOfQoute"
);
export const likeActionRemoveLikesOfComment = createAction(
  "likes/likeActionRemoveLikeOfComment"
);
