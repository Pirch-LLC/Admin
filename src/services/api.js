import axios from "axios";
import { isAuthenticated } from "./auth";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = async (
  method,
  urlEndPoint,
  data = {},
  params = {},
  contentType = "application/json"
) => {
  try {
    let headers = {
      "Content-Type": contentType,
      "ngrok-skip-browser-warning": "69420",
    };    
    let token = isAuthenticated();

    if (token) {
      headers.Authorization = `Bearer ${isAuthenticated()}`;
    }

    let response = await axios({
      method,
      url: API_BASE_URL + urlEndPoint,
      data,
      headers,
      params,
    });
    let res = response.data;
    return res;
  } catch (error) {
    let res = error?.response ? error.response.data : error.toString();
    return res;
  }
};
export const fileUploadApi = async (formData, next) => {
  try {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    let token = isAuthenticated();

    if (token) {
      headers.Authorization = `Bearer ${isAuthenticated()}`;
    }

    let response = await axios.post(API_BASE_URL + "/upload-file", formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        next(percentCompleted);
      },
    });
    let res = response.data;
    return res;
  } catch (error) {
    let res = error?.response ? error.response.data : error.toString();
    return res;
  }
};

export const multipleFileUploadApi = async (formData, next) => {
  try {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    let token = isAuthenticated();

    if (token) {
      headers.Authorization = `Bearer ${isAuthenticated()}`;
    }

    let response = await axios.post(API_BASE_URL + "/upload-files", formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        next(percentCompleted);
      },
    });
    let res = response.data;
    return res;
  } catch (error) {
    let res = error?.response ? error.response.data : error.toString();
    return res;
  }
};

export default api;
