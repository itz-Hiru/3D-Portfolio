import React from "react";
import { socialIcons } from "../utils/data";

const Footer = () => {
  return (
    <footer className="bg-slate-950/45 rounded-t-3xl mt-15 p-8">
      <div className="flex flex-col">
        <div className="">
          <div className="flex flex-row justify-center gap-4">
            {socialIcons.map((ico, id) => (
              <div key={id}>
                <div className="bg-black-200 rounded-xl w-[40px] h-[40px] flex items-center justify-center hover:bg-black-50 cursor-pointer">
                  <a href={ico.link} className="icon" target="_blank">
                    {ico.icon}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center mt-5">
            <p className="text-center text-sm text-white-50">
              © {new Date().getFullYear()} Hirumitha All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
