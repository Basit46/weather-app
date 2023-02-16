import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import cloudy from "./assets/cloudy.jpg";
import sunny from "./assets/sunny.jpg";
import snow from "./assets/snow.jpg";
import { useWeatherContext } from "./hooks/ContextHook";

function App() {
  const { returnedVal } = useWeatherContext();

  return (
    <div className="h-screen w-screen">
      <div className="absolute -z-10 h-full w-full">
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

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
