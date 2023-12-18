import { createAction } from "@reduxjs/toolkit";

export const userActionAddUser = createAction("users/userActionAddUser");
export const userActionLikeQoute = createAction("users/userActionLikeQoute");
export const userActionDislikeQoute = createAction(
  "users/userActionDislikeQoute"
);
export const userActionLikeComment = createAction(
  "users/userActionLikeComment"
);
export const userActionDislikeComment = createAction(
  "users/userActionDislikeComment"
);
export const userActionFollowTag = createAction("users/userActionFollowTag");
export const userActionUnfollowTag = createAction(
  "users/userActionUnfollowTag"
);
export const userActionFollowUser = createAction("users/userActionFollowUser");
export const userActionUnfollowUser = createAction(
  "users/userActionUnfollowUser"
);
