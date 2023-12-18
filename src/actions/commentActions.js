import { createAction } from "@reduxjs/toolkit";

export const commentActionAddComment = createAction(
  "comments/commentActionAddComment"
);
export const commentActionDeleteComment = createAction(
  "comments/commentActionDeleteComment"
);
export const commentActionAddLike = createAction(
  "comments/commentActionAddLike"
);
export const commentActionAddDislike = createAction(
  "comments/commentActionAddDislike"
);
export const commentActionAddReport = createAction(
  "comments/commentActionAddReport"
);
export const commentActionDeleteCommentsOfQoute = createAction(
  "comments/commentActionDeleteCommentsOfQoute"
);
