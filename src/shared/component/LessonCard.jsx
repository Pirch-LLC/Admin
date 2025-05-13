import React from "react";
import { Button } from "primereact/button";

export default function LessonCard({
  imgSrc,
  title,
  subtitle,
  statusText,
  statusColorClass = "bg-green-100 text-green-700",
  statusIcon,
  primaryButtonLabel = "Start Lesson",
  secondaryButtonLabel = "Regenerate",
  secondaryButtonIcon, 
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <div className="bg-light-color p-3 border-round-2xl w-full">
      <div className="flex align-items-center gap-3">
        {/* Icon */}
        <div className="bg-white p-2 border-circle flex align-items-center justify-content-center ">
          <img src={imgSrc} alt="Subject Icon" className="w-3rem h-3rem" />
        </div>

        {/* Text Section */}
        <div className="flex flex-column">
          <p className="m-0 font-bold text-900 text-md">{title}</p>
          <p className="m-0 text-600 text-sm">{subtitle}</p>
        </div>

        {/* Status Tag */}
        <div
          className={`ml-auto mb-6 px-3 py-1 border-round-2xl flex align-items-center gap-2 text-sm ${statusColorClass}`}
        >
          {statusIcon && (
            <img src={statusIcon} alt="Status Icon" className="w-1rem h-1rem" />
          )}
          {statusText}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-3">
        <Button
          label={primaryButtonLabel}
          className="bg-dark-red text-white border-none border-rounded"
          onClick={onPrimaryClick}
        />
        <Button
          className="bg-yellow-color text-white border-none border-rounded flex items-center gap-2"
          onClick={onSecondaryClick}
        >
          {secondaryButtonIcon && (
            <img src={secondaryButtonIcon} alt="Button Icon" className="" />
          )}
          {secondaryButtonLabel}
        </Button>
      </div>
    </div>
  );
}
