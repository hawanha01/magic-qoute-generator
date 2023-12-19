import { createAction } from "@reduxjs/toolkit";

export const CurrentUserSetCurrentUser = createAction(
  "currentUser/CurrentUserSetCurrentUser"
);
export const CurrentUserResetCurrentUser = createAction(
  "currentUser/CurrentUserResetCurrentUser"
);
