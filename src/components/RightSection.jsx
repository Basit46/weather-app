import React from "react";
import { FaSearch } from "react-icons/fa";
import { useWeatherContext } from "../hooks/ContextHook";

const RightSection = () => {
  const {
    inputVal,
    setInputVal,
    handleSubmit,
    returnedVal,
    prevSearches,
    handleClickedLoc,
  } = useWeatherContext();

  return (
    <div className="relative h-screen w-full md:w-[45%] lg:w-[35%] pl-[10px] sm:pl-[60px] backdrop-blur-[10px]">
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          className="outline-none bg-transparent border-b-white border-b-2 w-full text-white text-[1.3rem] placeholder:text-white"
          type="text"
          placeholder="Enter a Location"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <FaSearch
          onClick={handleSubmit}
          className="box-content bg-white text-[1.3rem] p-[25px] ml-[50px]"
        />
      </form>

      <div className="flex flex-col space-y-[20px] py-[30px] text-white/60 font-[500] text-[1.2rem]">
        {prevSearches.slice(0, 4).map((prev, index) => (
          <p
            onClick={() => handleClickedLoc(prev)}
            className="cursor-pointer"
            key={index}
          >
            {prev}
          </p>
        ))}
      </div>

      <div className="details border-white border-y-2 mr-[10px] sm:mr-[60px] text-white py-[30px] cursor-pointer">
        <h1 className="text-[1.5rem] font-bold">Weather Details</h1>
        <div className="detail-wrap">
          <div className="detail">
            <p className="name">Cloudy</p>{" "}
            <p className="value">{returnedVal?.current.cloud}%</p>
          </div>
          <div className="detail">
            <p className="name">Humidity</p>{" "}
            <p className="value">{returnedVal?.current.humidity}%</p>
          </div>
          <div className="detail">
            <p className="name">Windy</p>{" "}
            <p className="value">{returnedVal?.current.wind_mph}mph</p>
          </div>
          <div className="detail">
            <p className="name">Precipitation</p>{" "}
            <p className="value">{returnedVal?.current.precip_mm}mm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
