import { Dialog } from "primereact/dialog";
import React from "react";
import PrimaryButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { showUnsavedChangesDialog } from "../../store/slices/commonSlice";

export default function CustomDialog() {
  return <div></div>;
}
export const CustomDeleteDialog = ({
  isOpen,
  setIsOpen,
  onCancel,
  onDelete,
  loading,
  itemName,
  label,
  draggable = false,
}) => {
  return (
    <Dialog
      visible={isOpen}
      header={"Delete"}
      onHide={() => {
        if (!isOpen) return;
        setIsOpen(false);
      }}
      modal
      draggable={draggable}
      content={({ hide }) => (
        <div
          className=" p-4"
          style={{
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        >
          <p className="text-center text-lg mb-5 font-semibold">
            {`Are you sure you want to delete this ${itemName || "item"} ?`}
          </p>
          <div className="flex gap-2">
            <PrimaryButton
              label="Cancel"
              extraClassNames="w-6 px-5 bg-gray-color text-gray-700 border-round-lg"
              onClick={() => {
                setIsOpen(false);
                onCancel && onCancel();
              }}
            />
            <PrimaryButton
              label={label}
              extraClassNames="w-6 px-5 bg-dark-red border-round-lg"
              onClick={() => onDelete && onDelete()}
              loading={loading}
            />
          </div>
        </div>
      )}
    ></Dialog>
  );
};

export const CustomDataWarningDialog = () => {
  const unsavedChangesDialog = useSelector(
    (state) => state.common.unsavedChangesDialog
  );

  const dispatch = useDispatch();

  const onHide = () => {
    dispatch(showUnsavedChangesDialog(null));
  };

  const okHandler = () => {
    unsavedChangesDialog?.confirmAction();
    onHide();
  };

  return (
    <Dialog
      visible={!!unsavedChangesDialog}
      modal
      onHide={onHide}
      content={({ hide }) => (
        <div
          className="p-4"
          style={{
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        >
          <p className="text-center text-lg mb-5 font-semibold">
            You have unsaved changes. Are you sure you want to leave?
          </p>
          <div className="flex gap-2">
            <PrimaryButton
              label="Cancel"
              extraClassNames="w-6 px-5 bg-gray-color text-gray-700 border-round-lg"
              onClick={onHide}
            />
            <PrimaryButton
              label="Ok"
              extraClassNames="w-6 px-5 bg-dark-red border-round-lg"
              onClick={okHandler}
            />
          </div>
        </div>
      )}
    ></Dialog>
  );
};

export const CustomLogoutDialog = ({ visible, onHide, onLogout }) => {
  return (
    <Dialog
      visible={visible}
      modal
      onHide={onHide}
      content={({ hide }) => (
        <div
          className=" p-4"
          style={{
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        >
          <p className="text-center text-lg mb-5 font-semibold">
            Are you sure you want to Logout?
          </p>
          <div className="flex gap-2">
            <PrimaryButton
              label="Cancel"
              extraClassNames="w-6 px-5 bg-gray-color text-gray-700 border-round-lg"
              onClick={onHide}
            />
            <PrimaryButton
              label="Logout"
              extraClassNames="w-6 px-5 bg-dark-red border-round-lg"
              onClick={onLogout}
            />
          </div>
        </div>
      )}
    ></Dialog>
  );
};
