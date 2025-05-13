import api from "../../services/api";
import endPoints from "../../services/endPoints";
import { showToastAction } from "../slices/commonSlice";
import { setUserProfile } from "../slices/userSlice";

export const loginAction = (data, setLoading, onRes) => async (dispatch) => {
    try {
      setLoading(true);
      const res = await api("post", endPoints.LOGIN, {
        email: data.email,
        password: data.password,
      });
  
      if (res.success) {
        dispatch(
          showToastAction({
            type: "success",
            title: res.message || "Login successful",
            detail: "You have successfully logged in",
          })
        );
        dispatch(setUserProfile(res?.data));
        onRes && onRes(res.data);
      } else {
        dispatch(
          showToastAction({
            type: "error",
            title: res.message || "Login failed",
            detail: "Please check your credentials and try again",
          })
        );
      }
    } catch (error) {
      dispatch(
        showToastAction({
          type: "error",
          title: error.message || "Login failed",
          detail: "An unexpected error occurred",
        })
      );
    } finally {
      setLoading(false);
    }
  };