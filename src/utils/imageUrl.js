const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getImageURL = (path) => {
  if (path) {
    if (typeof path === "string") {
      if (path.includes("http")) {
        return path;
      } else {
        return API_BASE_URL + path;
      }
    } else {
      return URL.createObjectURL(path);
    }
  } else {
    return null;
  }
};
