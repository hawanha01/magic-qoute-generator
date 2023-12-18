import { createAction } from "@reduxjs/toolkit";

export const commentActionAddComment = createAction(
  "comments/commentActionAddComment"
);
export const commentActionDeleteComment = createAction(
  "comments/commentActionDeleteComment"
);
export const commentActionAddLikeToComment = createAction(
  "comments/commentActionAddLikeToComment"
);
export const commentActionRemoveLikeFromComment = createAction(
  "comments/commentActionRemoveLikeFromComment"
);
export const commentActionAddDislikeToComment = createAction(
  "comments/commentActionAddDislikeToComment"
);
export const commentActionRemoveDislikeFromComment = createAction(
  "comments/commentActionRemoveDislikeFromComment"
);
export const commentActionAddReport = createAction(
  "comments/commentActionAddReport"
);
export const commentActionDeleteCommentsOfQoute = createAction(
  "comments/commentActionDeleteCommentsOfQoute"
);
export const commentActionEditComment = createAction(
  "comments/commentActionEditComment"
);
