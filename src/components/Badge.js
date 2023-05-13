import React from "react";

const Badge = ({ text }) => {
  return (
    <div
      className={`flex items-center justify-center capitalize text-sm py-1 font-semibold px-2 border rounded-md border-red-500 w-fit text-red-500`}
    >
      {text}
    </div>
  );
};

export default Badge;
