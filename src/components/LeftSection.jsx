import React from "react";
import { useWeatherContext } from "../hooks/ContextHook";

const LeftSection = () => {
  const { returnedVal, searchedLoc } = useWeatherContext();

  return (
    <div className="w-full md:w-[55%] lg:w-[65%] flex flex-col justify-between px-[10px] sm:px-[80px] py-[20px] sm:py-[40px] text-white">
      <p>weather.App</p>
      <div className="mb-[40px] flex items-end space-x-[20px]">
        <p className="text-[5rem] leading-none">
          {Math.round(returnedVal?.current.temp_c) < 10
            ? Math.round(returnedVal?.current.temp_c) < 0
              ? Math.round(returnedVal?.current.temp_c)
              : "0" + Math.round(returnedVal?.current.temp_c)
            : Math.round(returnedVal?.current.temp_c)}
          <sup>o</sup>
        </p>
        <div>
          <p className="text-[2rem] font-[500]">
            {searchedLoc &&
              searchedLoc.charAt(0).toUpperCase() +
                searchedLoc.slice(1).toLowerCase()}
          </p>
          <div className="text-white/70">
            {returnedVal?.current.last_updated}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={returnedVal?.current.condition.icon} alt="weather icon" />
          <p className="">{returnedVal?.current.condition.text}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
