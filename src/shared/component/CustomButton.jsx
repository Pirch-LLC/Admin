import React from "react";
import { Button } from "primereact/button";
import GoogleIcon from "../../assets/images/google.svg";

export default function PrimaryButton({
  label,
  extraClassNames,
  loading = false,
  onClick,
  icon,
  ...props
}) {
  return (
    <Button
      className={`primary-button align-items-center flex  justify-content-center  border-none border-rounded ${extraClassNames}`}
      label={label}
      style={{ alignSelf: "center" }}
      size="medium"
      onClick={onClick}
      loading={loading}
      icon={icon}
      {...props}
    />
  );
}

export const OutlinedButton = ({
  label,
  extraClassNames,
  onClick,
  ...props
}) => {
  return (
    <Button
      className={`primary-color border-green-900 align-center oulined-btn border-round-xl ${
        extraClassNames ? extraClassNames : ""
      }`}
      label={label}
      onClick={onClick}
      style={{ alignSelf: "center" }}
      size="medium"
      outlined
      {...props}
    />
  );
};

export const GoogleButton = ({ label, extraClassNames, onClick, ...props }) => {
  return (
    <Button
      className={`flex justify-content-center bg-white border-none text-dark gap-2 font-semibold border-round-3xl ${
        extraClassNames ? extraClassNames : "px-4 py-3 w-full"
      }`}
      onClick={onClick}
      style={{ alignSelf: "center" }}
    >
      <img src={GoogleIcon} alt="" />
      Sign In with Google
    </Button>
  );
};

export const CustomEyeIconButton = ({
  type = "button",
  extraClassNames = "",
  tooltip = "View",
  ...props
}) => {
  return (
    <Button
      icon="pi pi-eye"
      style={{ alignSelf: "center" }}
      type={type}
      tooltipOptions={{ position: "top" }}
      {...props}
      className={`p-button bg-transparent border-none text-dark  m-1 ${extraClassNames}`}
    />
  );
};

export const CustomWarningButton = ({
  type = "button",
  label = "",
  extraClassNames = "",
  ...props
}) => {
  return (
    <Button
      icon="pi pi-pencil"
      label={label}
      style={{ alignSelf: "center" }}
      type={type}
      {...props}
      className={` text-dark  bg-transparent border-none m-1 ${extraClassNames}`}
    />
  );
};

export const CustomDangerButton = ({
  type = "button",
  label = "",
  extraClassNames = "",
  ...props
}) => {
  return (
    <Button
      label={label}
      style={{ alignSelf: "center" }}
      type={type}
      {...props}
      className={` text-dark  bg-transparent border-none m-1 ${extraClassNames}`}
    />
  );
};

export const CustomGenerate = ({ isEdit, handleSubmit, loading }) => (
  <PrimaryButton
    label={isEdit ? "Update & Regenerate" : "Generate"}
    className="generate-button border-none"
    onClick={handleSubmit}
    loading={loading}
  />
);
