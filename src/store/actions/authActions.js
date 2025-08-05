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
      if (!res?.data?.two_factor_auth) {
        dispatch(setUserProfile(res?.data));
      }
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

export const sendOtpAction = (data, purpose, setLoading, onRes) => async (dispatch) => {
  setLoading(true);
  const payload = { email: data.email, purpose: purpose };
  const res = await api("post", endPoints.SEND_OTP, payload);

  if (res.success) {
    dispatch(
      showToastAction({
        type: "success",
        title: res.message || "OTP sent successfully",
        detail: "Please check your email for the verification code",
      })
    );
    onRes && onRes(res);
  } else {
    dispatch(
      showToastAction({
        type: "error",
        title: res.message || "Failed to send OTP",
        detail: "Please try again or contact support",
      })
    );
  }
  setLoading(false)
};

export const verifyOtpAction = (data, setLoading, onRes) => async (dispatch) => {
  setLoading(true);
  const payload = {
    otp_code: data.otp_code,
    token: data.token,
  };
  const res = await api("post", endPoints.VERIFY_OTP, payload);
  if (res.success) {
    dispatch(setUserProfile(res?.data));
    onRes && onRes(res?.data);
  } else {
    dispatch(showToastAction({ type: "error", title: res.message }));
  }
  setLoading(false);
};