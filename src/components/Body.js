import React from "react";
import Sidebar from "./Sidebar";
import Maincontainer from "./Maincontainer";
import { useSelector } from "react-redux";
const Body = () => {
  const boolean = useSelector((store) => store.app.isMenuOpen);
  if (!boolean) return null;
  return (
    <div className="flex w-full">
      {boolean ? <Sidebar /> : ""}
      <Maincontainer />
    </div>
  );
};

export default Body;
