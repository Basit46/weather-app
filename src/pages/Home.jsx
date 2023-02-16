import React from "react";
import { useWeatherContext } from "../hooks/ContextHook";

const Home = () => {
  const { fname } = useWeatherContext();
  return <div>Home {fname}</div>;
};

export default Home;
