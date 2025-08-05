import api from "../../services/api";
import endPoints from "../../services/endPoints";
import {
  handleFormatDate,
  showCatchErrorToast,
} from "../../utils/commonFunctions";
import { setChild, setChildrenList } from "../slices/childSlice";
import { showToastAction } from "../slices/commonSlice";
import { setUserProfile } from "../slices/userSlice";

export const addUserAction = (data, setLoading, onRes) => async (dispatch) => {
  try {
    setLoading(true);
    const res = await api(
      "post",
      endPoints.USERS,
      data,
      {},
      "multipart/form-data"
    );

    if (res.success) {
      dispatch(
        showToastAction({
          type: "success",
          title: "Success",
          detail: res.message,
        })
      );
      onRes && onRes(res);
    } else {
      dispatch(
        showToastAction({
          type: "error",
          title: "Error",
          detail: res.message,
        })
      );
    }
  } catch (error) {
    showCatchErrorToast();
  } finally {
    setLoading(false);
  }
};

export const getUserListAction = (page, rows, setLoading, onRes) => async (dispatch) => {
  try {
    setLoading && setLoading(true);
    const result = await api("get", endPoints.USERS + `?limit=${rows}&page=${page}`);
    if (result?.success) {
      dispatch(setChildrenList(result));
      return onRes && onRes(result);
    } else {
      dispatch(
        showToastAction({
          type: "error",
          title: "Error",
          detail: result?.message,
        })
      );
    }
  } catch (error) {
    showCatchErrorToast();
  } finally {
    setLoading && setLoading(false);
  }
};

export const getUserDataAction = (id) => async (dispatch) => {
  try {
    const result = await api("get", endPoints.USERS + `${id}/`);
    if (result?.success) {
      dispatch(setChild(result?.data));
      return onRes && onRes(result?.data);
    } else {
      dispatch(
        showToastAction({
          type: "error",
          title: "Error",
          detail: result?.message,
        })
      );
    }
  } catch (error) {
    showCatchErrorToast();
  } finally {
  }
};

export const deleteUserAction = (id, setLoading, onRes) => async (dispatch) => {
  try {
    setLoading(true);
    const result = await api("delete", endPoints.USERS + `${id}/`);
    if (result?.success) {
      onRes && onRes(result);
      dispatch(
        showToastAction({
          type: "success",
          title: "Success",
          detail: result?.message,
        })
      );
      dispatch(getUserListAction(1, 10));
    } else {
      dispatch(
        showToastAction({
          type: "error",
          title: "Error",
          detail: result?.message,
        })
      );
    }
  } catch (error) {
    showCatchErrorToast();
  } finally {
    setLoading(false);
  }
};

export const updateUserAction =
  (id, data, setLoading, onRes) => async (dispatch) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("full_name", data.fullName);
      formData.append("date_of_birth", handleFormatDate(data.dateOfBirth));
      formData.append("grade_level", data.gradeLevel);
      if (typeof data.image !== "string") {
        formData.append("image", data.image);
      }
      const res = await api(
        "put",
        endPoints.USERS + `${id}/`,
        formData,
        {},
        "multipart/form-data"
      );

      if (res.success) {
        dispatch(
          showToastAction({
            type: "success",
            title: "Success",
            detail: res.message,
          })
        );
        onRes && onRes(res);
      } else {
        dispatch(
          showToastAction({
            type: "error",
            title: "Error",
            detail: res?.message,
          })
        );
      }
    } catch (error) {
      showCatchErrorToast();
    } finally {
      setLoading(false);
    }
  };

export const getProfileAction = (onRes) => async (dispatch) => {
  const res = await api("get", endPoints.GET_PROFILE);
  if (res.success) {
    dispatch(setUserProfile(res?.data));
    onRes && onRes(res?.data);
  }
};

export const updateProfileAction =
  (data, setLoading, onRes) => async (dispatch) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("full_name", data.fullName);
      formData.append("email", data.email);
      if (typeof data.image === "object") {
        formData.append("image", data.image);
      }

      const res = await api(
        "put",
        endPoints.EDIT_PROFILE,
        formData,
        {},
        "multipart/form-data"
      );

      if (res.success) {
        dispatch(
          showToastAction({
            type: "success",
            title: res.message || "Profile updated successfully",
            detail: "The profile has been updated",
          })
        );
        dispatch(setUserProfile(res?.data));
        onRes && onRes(res);
      } else {
        dispatch(
          showToastAction({
            type: "error",
            title: res.message || "Failed to add profile",
            detail: "Please check the information and try again",
          })
        );
      }
    } catch (error) {
      dispatch(
        showToastAction({
          type: "error",
          title: "Something went wrong",
          detail:
            error.message || "Failed to add profile due to technical issues",
        })
      );
    } finally {
      setLoading(false);
    }
  };

export const updateUserActiveStatus =
  (id, setLoading, onRes) => async (dispatch) => {
    try {
      setLoading(true);

      const res = await api(
        "patch",
        endPoints.USERS_ACTIVATE_DEACTIVATE + id + "/"
      );

      if (res.success) {
        dispatch(
          showToastAction({
            type: "success",
            title: "Success",
            detail: res.message || "User status updated successfully",
          })
        );
        onRes && onRes(res);
        dispatch(getUserListAction(1, 10));
      } else {
        dispatch(
          showToastAction({
            type: "error",
            title: "Error",
            detail:
              res.message || "Failed to update user status, please try again",
          })
        );
      }
    } catch (error) {
      dispatch(
        showToastAction({
          type: "error",
          title: "Error",
          detail: error.message || "Something went wrong",
        })
      );
    } finally {
      setLoading(false);
    }
  };
