import React from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const Main = () => {
  return (
    <div className="h-full w-full md:flex">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Main;
