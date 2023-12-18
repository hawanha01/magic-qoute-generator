import { createAction } from "@reduxjs/toolkit";

export const qouteActionAddQoute = createAction("qoutes/qouteActionAddQoute");
export const qouteActionUpdateQoute = createAction(
  "qoutes/qouteActionUpdateQoute"
);
export const qouteActionDeleteQoute = createAction(
  "qoutes/qouteActionDeleteQoute"
);
export const qouteActionAddLikeToQoute = createAction(
  "qoutes/qouteActionAddLikeToQoute"
);
export const qouteActionRemoveLikeFromQoute = createAction(
  "qoutes/qouteActionRemoveLikeFromQoute"
);
export const qouteActionRemoveDislikeFromQoute = createAction(
  "qoutes/qouteActionRemoveDislikeFromQoute"
);
export const qouteActionAddDislikeToQoute = createAction(
  "qoutes/qouteActionAddDislikeToQoute"
);
export const qouteActionReportQoute = createAction(
  "qoutes/qouteActionReportQoute"
);
export const qouteActionAddCommentToQoute = createAction(
  "qoutes/qouteActionAddCommentToQoute"
);
