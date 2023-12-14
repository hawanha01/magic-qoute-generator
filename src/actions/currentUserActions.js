import { createAction } from "@reduxjs/toolkit";

export const setCurrentUser = createAction("current_user/setCurrentUser");
export const resetCurrentUser = createAction("current_user/resetCurrentUser");
