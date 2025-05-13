import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { useDispatch, useSelector } from "react-redux";
import { showToastAction } from "../store/slices/commonSlice";

export default function ToastContainer() {
  const { toastInfo } = useSelector((state) => state?.common);
  const dispatch = useDispatch();
  const toast = useRef();
  useEffect(() => {
    if (toastInfo?.title || toastInfo.detail) {
      toast.current.show({
        severity: toastInfo.type,
        summary: toastInfo?.title,
        detail: toastInfo.detail,
        life: 3000,
      });

      // Clear toast after short delay (let it render first)
      setTimeout(() => {
        dispatch(showToastAction({}));
      }, 100); // Small delay to avoid race conditions
    }
  }, [toastInfo]);
  return (
    <>
      <Toast style={{ zIndex: "999" }} ref={toast} />
    </>
  );
}
