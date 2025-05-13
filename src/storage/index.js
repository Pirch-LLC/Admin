export const getGeneratedLessonData = () => {
  const data = sessionStorage.getItem("gen-lesson-data");
  if (data) return JSON.parse(data);
  return null;
};

export const saveGeneratedLessonData = (data) => {
  data = JSON.stringify(data);
  sessionStorage.setItem("gen-lesson-data", data);
};

// localStorage.js
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch {}
};
