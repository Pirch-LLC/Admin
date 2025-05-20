import api from "../../services/api";
import endPoints from "../../services/endPoints";
import { showCatchErrorToast } from "../../utils/commonFunctions";
import { setChildrenList } from "../slices/childSlice";
import { showToastAction } from "../slices/commonSlice";
import { setUserProfile } from "../slices/userSlice";

export const sendUserInviteAction =
  (data, setLoading, onRes) => async (dispatch) => {
    try {
      setLoading(true);
      const res = await api("post", endPoints.INVITE, data);

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

export const getUserListAction =
  (page, rows, setLoading = () => {}, onRes) =>
  async (dispatch) => {
    try {
      setLoading(true);
      const result = await api("get", endPoints.USERS, {
        params: { page, rows },
      });
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
      setLoading(false);
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

export const getProfileAction = (onRes) => async (dispatch) => {
  const res = await api("get", endPoints.GET_PROFILE);
  if (res.success) {
    dispatch(setUserProfile(res?.data));
    onRes && onRes(res?.data);
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
