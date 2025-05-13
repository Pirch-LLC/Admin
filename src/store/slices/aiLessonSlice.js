import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lessons: [],
  count: 0,
  loading: false,
  generateLessonPayload: null,
  generatedLessonResponse: null,
  editLessonData: null,
};

export const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    resetLesson: () => initialState,
    setLesson: (state, action) => {
      state.lessons = action.payload;
    },
    setEditLessonData: (state, action) => {
      state.editLessonData = action.payload;
    },
    setGenerateLessonPayload: (state, action) => {
      state.generateLessonPayload = action.payload;
    },
    setGeneratedLessonResponse: (state, action) => {
      state.generatedLessonResponse = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  resetLesson,
  setLesson,
  setEditLessonData,
  setLessonList,
  setLoading,
  setGenerateLessonPayload,
  setGeneratedLessonResponse,
} = lessonSlice.actions;

export default lessonSlice.reducer;
