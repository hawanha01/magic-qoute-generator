import { createAction } from "@reduxjs/toolkit";

export const CurrentUserSetCurrentUser = createAction(
  "current_user/CurrentUserSetCurrentUser"
);
export const CurrentUserResetCurrentUser = createAction(
  "current_user/CurrentUserResetCurrentUser"
);
