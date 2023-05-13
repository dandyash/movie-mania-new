import React from "react";

const CommonBanner = ({ title, description, backDrop }) => {
  return (
    <div className="xl:h-[500px] lg:h-96 md:h-80 overflow-hidden relative">
      <img src={backDrop} alt="BackGround" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <h1 className="text-6xl font-medium capitalize">{title}</h1>
        {description && <p className="text-lg">{description}</p>}
      </div>
    </div>
  );
};

export default CommonBanner;
