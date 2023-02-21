import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import snow from "./assets/snow.jpg";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden ">
      <div>
        <div className="h-full w-full fixed -z-10">
          <img
            src={snow}
            className="h-full w-full object-cover"
            alt="Background"
          />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
