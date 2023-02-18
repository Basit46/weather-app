import React from "react";
import { useWeatherContext } from "../hooks/ContextHook";
import RainyLandingpage from "./RainyLandingpage";

const Home = () => {
  const { returnedVal } = useWeatherContext();

  return (
    <div className="h-full w-full">
      <RainyLandingpage />
    </div>
  );
};

export default Home;
