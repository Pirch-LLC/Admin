import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loader: false,
  toastInfo: {},
  unsavedChangesDialog: null,
};
export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    showLoaderAction: (state) => {
      state.loader = true;
    },
    hideLoaderAction: (state) => {
      state.loader = false;
    },
    showToastAction: (state, action) => {
      state.toastInfo = action.payload;
    },
    showUnsavedChangesDialog: (state, action) => {
      state.unsavedChangesDialog = action.payload;
    },
  },
});

export const {
  showLoaderAction,
  hideLoaderAction,
  showToastAction,
  showUnsavedChangesDialog,
} = commonSlice.actions;

export default commonSlice.reducer;
