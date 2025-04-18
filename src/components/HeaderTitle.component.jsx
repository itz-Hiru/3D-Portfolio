import React from "react";

const HeaderTitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge pointer-events-none">
        <p>{subTitle}</p>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center pointer-events-none">
        {title}
      </div>
    </div>
  );
};

export default HeaderTitle;
