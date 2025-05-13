import React from "react";

const ToDoList = () => {
  const lines = Array.from({ length: 15 });

  return (
    <div
      className="p-3 border-round shadow-2 bg-light-color mt-5 w-full">
      <h3 className="m-0 mb-2 lobster-regular text-3xl font-normal">
        To Do List
      </h3>
      <div className="lines">
        {lines.map((_, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #555",
              height: "28px",
              marginBottom: "2px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
