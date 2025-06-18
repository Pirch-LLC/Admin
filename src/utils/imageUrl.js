import constants from "../constants";

export const getImageURL = (path) => {
  if (path) {
    if (typeof path === "string") {
      if (path.includes("http")) {
        return path;
      } else {
        return constants.baseUrl + path;
      }
    } else {
      return URL.createObjectURL(path);
    }
  } else {
    return null;
  }
};
