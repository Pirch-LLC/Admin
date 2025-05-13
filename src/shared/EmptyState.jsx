import React from "react";
import icon from "../assets/images/emptychild.svg";

const EmptyState = () => {
  return (
    <div
      className="flex flex-column align-items-center justify-content-center text-center text-500 w-full"
      style={{ height: "80%" }}
    >
      <img src={icon} alt="No Data" className="w-1/3 h-1/3" />
      <div className="text-xl font-medium">No Data is Found</div>
    </div>
  );
};

export default EmptyState;
