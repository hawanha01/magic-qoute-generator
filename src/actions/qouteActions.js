import { createAction } from "@reduxjs/toolkit";

export const addQoute = createAction("qoutes/addQoute");
export const deleteQoute = createAction("qoutes/deleteQoute");
export const addLike = createAction("qoutes/addLike");
export const removeLikeFromQoute = createAction("qoutes/removeLikeFromQoute");
export const removeDislikeFromQoute = createAction(
  "qoutes/removeDislikeFromQoute"
);
export const addDislike = createAction("qoutes/addDislike");
export const reportQoute = createAction("qoutes/reportQoute");
