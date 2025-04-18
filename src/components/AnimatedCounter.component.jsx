import React from "react";
import CountUp from "react-countup";
import { counterItems } from "../utils/data";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-5 flex flex-col justify-center items-center mb-2">
            <div
              key={counterItems.label}
              className="counter-number text-white text-5xl font-bold"
            >
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
