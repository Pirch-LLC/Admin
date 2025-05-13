import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  child: {},
  childrenData: [],
  count: 0,
  loading: false,
};

export const childSlice = createSlice({
  name: "child",
  initialState,
  reducers: {
    resetChild: () => initialState,
    setChild: (state, action) => {
      state.child = action.payload;
    },
    setChildrenList: (state, action) => {
      state.childrenData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { resetChild, setChild, setChildrenList, setLoading } =
  childSlice.actions;

export default childSlice.reducer;
