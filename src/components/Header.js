import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {useDispatch} from "react-redux";
import { toggleSidebar } from "../utils/appslice";
const Header = () => {
  const dispatch = useDispatch()
  function handleToggle(){
    dispatch(toggleSidebar())
  }
  return (
    <div className="flex justify-around p-2 shadow-xl">
      <div className="flex w-1/4">
        <GiHamburgerMenu size={30} onClick={handleToggle} className=" cursor-pointer"/>
        <FaYoutube size={30} color="red"  />
        <span className="font-bold text-xl">Youtube</span>
      </div>
      <div className="w-1/2">
        <input
          type="text"
          className="border-2 border-black w-3/4 rounded-s-xl p-1"
          placeholder="search"
        />
        <button className=" bg-slate-500  rounded-e-xl p-2">Search</button>
      </div>
      <div className="w-1/4 flex justify-end">
        <FaUser size={30} className=" border-2 rounded-full p-1"/>
      </div>
    </div>
  );
};

export default Header;
