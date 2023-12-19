import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";
import { defaultSchema } from "../../schema";

const initialState = {
  data: schema.reports,
  id: 0,
};

const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    reportActionAddReportToQoute: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultReport,
          ...action.payload.values,
          qouteId: action.payload.qouteId,
          userId: action.payload.currentUser.id,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
    },
    reportActionAddReportToUser: (state, action) => {
      console.log(action.payload)
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultReport,
          ...action.payload.values,
          repotedUser: action.payload.userId,
          userId: action.payload.currentUser.id,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
      console.log(state.data)
    },
    reportActionDeleteReportsOfQoute: (state, action) => {
      const updatedReports = state.data.filter(
        (report) => !(report.qouteId === action.payload)
      );
      state.data = updatedReports;
    },
  },
});

export default reportSlice;
