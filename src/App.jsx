import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { useWeatherContext } from "./hooks/ContextHook";
import cloudy from "./assets/cloudy.jpg";
import sunny from "./assets/sunny.jpg";
import snow from "./assets/sunny.jpg";

function App() {
  const { returnedVal, loadError } = useWeatherContext();
  return (
    <div className="relative h-screen w-screen overflow-x-hidden ">
      <div>
        <div className="h-full w-full fixed -z-10">
          {loadError && (
            <img
              src={snow}
              className="h-full w-full object-cover"
              alt="Background"
            />
          )}
          {returnedVal?.current.temp_c <= 5 && (
            <img
              src={snow}
              className="h-full w-full object-cover"
              alt="Background"
            />
          )}
          {returnedVal?.current.temp_c > 5 &&
            returnedVal?.current.temp_c <= 15 && (
              <img
                src={cloudy}
                className="h-full w-full object-cover"
                alt="Background"
              />
            )}
          {returnedVal?.current.temp_c > 15 && (
            <img
              src={sunny}
              className="h-full w-full object-cover"
              alt="Background"
            />
          )}
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
