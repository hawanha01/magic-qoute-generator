import { createSlice } from "@reduxjs/toolkit";
import schema from "../../schema";

const initialState = {
  data: schema.reports,
  id: 0,
};

const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    reportActionDeleteReportsOfQoute: (state, action) => {
      const updatedReports = state.data.filter(
        (report) => !(report.qoute_id === action.payload)
      );
      state.data = updatedReports;
    },
  },
});

export default reportSlice;
