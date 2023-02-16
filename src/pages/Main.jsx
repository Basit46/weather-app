import React from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const Main = () => {
  return (
    <div className="h-full w-full relative flex">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Main;
