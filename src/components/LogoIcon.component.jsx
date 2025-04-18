import React from "react";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item text-slate-400">
      <span className="text-xl">{icon.icon}</span>
      <p className="text-xl ml-5">{icon.name}</p>
    </div>
  );
};

export default LogoIcon;
