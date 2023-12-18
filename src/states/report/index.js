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
    reportActionAddReport: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...defaultSchema.defaultReport,
          ...action.payload.values,
          user_id: action.payload.currentUser.id,
          id: state.id + 1,
        },
      ];
      state.id = state.id + 1;
    },
    reportActionDeleteReportsOfQoute: (state, action) => {
      const updatedReports = state.data.filter(
        (report) => !(report.qoute_id === action.payload)
      );
      state.data = updatedReports;
    },
  },
});

export default reportSlice;
