import { createAction } from "@reduxjs/toolkit";

export const addQoute = createAction("qoutes/addQoute");
export const deleteQoute = createAction("qoutes/deleteQoute");
export const likeQoute = createAction("qoutes/likeQoute");
export const dislikeQoute = createAction("qoutes/dislikeQoute");
export const reportQoute = createAction("qoutes/reportQoute");
