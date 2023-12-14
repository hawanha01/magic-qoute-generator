import { createAction } from "@reduxjs/toolkit";

export const addUser = createAction("users/addUser");
export const likeQoute = createAction("users/likeQoute");
export const dislikeQoute = createAction("users/dislikeQoute");
export const likeComment = createAction("users/likeComment");
export const dislikeComment = createAction("users/dislikeComment");
export const followTag = createAction("users/followTag");
export const unfollowTag = createAction("users/unfollowTag");
export const followUser = createAction("users/followUser");
export const unfollowUser = createAction("users/unfollowUser");
