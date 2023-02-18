import React from "react";
import { useWeatherContext } from "../hooks/ContextHook";
import umb from "../assets/umb2.png";

const RainyLandingpage = () => {
  const { returnedVal } = useWeatherContext();

  return (
    <div className="relative h-full w-full px-[50px] py-[30px] bg-[chocolate] text-white flex flex-col justify-between">
      <img
        className="absolute right-[150px] bottom-[150px] w-[600px] -rotate-[15deg] z-[1]"
        src={umb}
        alt="umbrella"
      />

      <div className="w-full flex justify-between">
        <div>
          <p className="w-[22vw]">
            <span className="opacity-0">--------</span> WELCOME TO THE{" "}
            <span className="text-[gold]">WEATHER FORECAST,</span> NOW LETS SEE
            WHAT THE WEATHER IS LIKE TODAY IN LONDON, IT'S WINDY AND COLD, THERE
            IS A CHANCE OF SOME RAIN TOO, SO{" "}
            <span className="text-[gold]">DON'T LEAVE HOME</span> WITHOUT YOUR
            UMBRELLA! THE TEMPERATURE IS AROUNDa{" "}
            <span>
              {returnedVal?.current.temp_c}
              <sup>o</sup>
            </span>{" "}
            CENTRIGADE. HAVE A GREAT DAY FRIEND 🚀
          </p>

          <button className="mt-[20px] border-white border-2 p-2 bg-white text-[tomato] font-bold hover:bg-white/80 duration-200">
            CLICK HERE TO SEARCH OTHER LOCATIONS
          </button>
        </div>
        <p>TODAY, '23</p>
      </div>

      <div className="w-full flex justify-between z-50">
        <div className="w-[150px] mt-[50px] text-[1.2rem]">
          <div className="flex justify-between">
            <p>Cloudy</p> <p>{returnedVal?.current.cloud}%</p>
          </div>
          <div className="flex justify-between">
            <p>Humidity</p> <p>{returnedVal?.current.humidity}%</p>
          </div>
          <div className="flex justify-between">
            <p>Windy</p> <p>{returnedVal?.current.wind_mph}mph</p>
          </div>
        </div>
        <h1 className="mr-[80px] text-[8rem] text-center leading-none">
          Take an <br />
          <span className="text-[gold]">UMBRELLA</span>
        </h1>
      </div>
    </div>
  );
};

export default RainyLandingpage;
