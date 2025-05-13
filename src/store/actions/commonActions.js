import api from "../../services/api";
import endPoints from "../../services/endPoints";

const uploadFiles = async (files) => {
  const promises = files.map(async (item) => {
    if (typeof item === "string") {
      return item;
    } else {
      const formData = new FormData();
      formData.append("files", item);
      const res = await api(
        "post",
        endPoints.UPLOAD_FILES,
        formData,
        null,
        "multipart/form-data"
      );
      if (res.success && res.data) {
        return res.data[0].url;
      }
    }
  });
  const urls = await Promise.all(promises);
  return urls;
};
export { uploadFiles };
