import React from "react";
import Buttons from "./Buttons";
import Videocontainer from "./Videocontainer";
const Maincontainer = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* <div className=" overflow-x-scroll">
        <Buttons />
      </div> */}      
      <Videocontainer/>
    </div>
  );
};

export default Maincontainer;
