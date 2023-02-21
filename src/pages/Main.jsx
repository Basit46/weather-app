import React from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import cloudy from "../assets/cloudy.jpg";
import sunny from "../assets/sunny.jpg";
import snow from "../assets/snow.jpg";
import { useWeatherContext } from "../hooks/ContextHook";

const Main = () => {
  const { returnedVal, loadError } = useWeatherContext();
  return (
    <div className="h-full w-full relative flex">
      <div className="absolute -z-10 h-full w-full">
        {loadError && (
          <img src={snow} className="object-cover" alt="Background" />
        )}
        {returnedVal?.current.temp_c <= 5 && (
          <img src={snow} className="object-cover" alt="Background" />
        )}
        {returnedVal?.current.temp_c > 5 &&
          returnedVal?.current.temp_c <= 15 && (
            <img src={cloudy} className="object-cover" alt="Background" />
          )}
        {returnedVal?.current.temp_c > 15 && (
          <img src={sunny} className="object-cover" alt="Background" />
        )}
      </div>

      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Main;
