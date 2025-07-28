// src/redux/slices/clientServicesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchServicesByType } from "../thunks/clientServicesThunk";

const clientServicesSlice = createSlice({
  name: "clientServices",
  initialState: {
    loading: false,
    error: null,
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicesByType.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.list = [];
      })
      .addCase(fetchServicesByType.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; // array
      })
      .addCase(fetchServicesByType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clientServicesSlice.reducer;
