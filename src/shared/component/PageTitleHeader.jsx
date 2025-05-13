import React, { useMemo } from "react";
import PrimaryButton from "./CustomButton";
import { BreadCrumb } from "primereact/breadcrumb";

export default function PageTitleHeader({
  model = [],
  home,
  title,
  label,
  onClick,
  btnlabel,
}) {
  const formattedModel = useMemo(() => {
    if (model?.length) {
      model[model?.length - 1].template = (item) => (
        <span
          style={{ color: "#4b5563" }}
        >
          {item.label}
        </span>
      );
    }
    return model || [];
  }, [model]);
  return (
    <div className="flex align-items-center justify-content-between shadow-1 p-4 border-round-xl mb-3">
      <div className="">
        <h1 className="lobster-regular font-normal m-0">{title}</h1>
        {label && (
          <BreadCrumb
            className="border-none px-0"
            model={formattedModel}
            home={home}
          />
        )}
      </div>
      {btnlabel && (
        <PrimaryButton
          label={btnlabel}
          extraClassNames="bg-dark-red"
          onClick={onClick}
        />
      )}
    </div>
  );
}
