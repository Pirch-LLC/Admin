import React from "react";
import { useNavigate } from "react-router-dom";

export default function InfoCard({
  title = "Default Title",
  description = "Default description",
  image,
  headingColor = "",
  backgroundColor = "bg-white",
  imageBackground = "bg-light-color",
  path,
}) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex ${backgroundColor} border-rounded overflow-hidden shadow-2  cursor-pointer`}
      onClick={() => {
        navigate(path)}}
    >
      <div className={`${imageBackground} p-4`}>
        {image && <img src={image} alt={title} width="90px" height="90px" />}
      </div>
      <div className="flex justify-content-center flex-column px-4">
        <h3
          className={`text-3xl font-normal lobster-regular text-left m-0 ${headingColor}`}
        >
          {title}
        </h3>
        <p className="font-normal text-lg">{description}</p>
      </div>
    </div>
  );
}
