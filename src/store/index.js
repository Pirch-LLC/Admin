import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import commonReducer from "./slices/commonSlice";
import childSlice from "./slices/childSlice";
import lessonReducer from "./slices/aiLessonSlice";
import { loadState, saveState } from "../storage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    user: userSlice,
    common: commonReducer,
    child: childSlice,
    lesson: lessonReducer,
  },
  // preloadedState,
});

// Save to localStorage on every state change
// store.subscribe(() => {
//   saveState(store.getState());
// });
