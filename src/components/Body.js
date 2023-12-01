import React from "react";
import Sidebar from "./Sidebar";
import Maincontainer from "./Maincontainer";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex w-full h-screen overflow-y-hidden">
      <Sidebar />
      <Outlet />
      {/* <Maincontainer /> */}
    </div>
  );
};

export default Body;
