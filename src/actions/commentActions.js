import { createAction } from "@reduxjs/toolkit";

export const addComment = createAction("comments/addComment");
export const deleteComment = createAction("comments/deleteComment");
export const likeComment = createAction("comments/likeComment");
export const dislikeComment = createAction("comments/dislikeComment");
export const reportComment = createAction("comments/reportComment");
