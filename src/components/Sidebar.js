import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const boolean = useSelector((store) => store.app.isMenuOpen);
  if (!boolean) return null;
  return (
    <div
      className="text-white bg-black w-1/4 h-full
    hidden md:flex md:flex-col justify-start items-center text-center"
    >
      <h3 className=" hover:bg-slate-400 w-full m-1 cursor-pointer">Home</h3>
      <h3 className=" hover:bg-slate-400 w-full m-1  cursor-pointer">Shorts</h3>
      <h3 className=" hover:bg-slate-400 w-full m-1  cursor-pointer">
        Subscriptions
      </h3>
      <span className="w-full border-2 rounded-3xl"></span>
      <div className="p-2">
        <h3 className=" text-xl">Explore</h3>
        <ul>
          <li className="hover:bg-slate-400 cursor-pointer">Trending</li>
          <li className="hover:bg-slate-400 cursor-pointer">Shopping</li>
          <li className="hover:bg-slate-400 cursor-pointer">Music</li>
          <li className="hover:bg-slate-400 cursor-pointer">Movies</li>
          <li className="hover:bg-slate-400 cursor-pointer">Live</li>
          <li className="hover:bg-slate-400 cursor-pointer">Gaming</li>
          <li className="hover:bg-slate-400 cursor-pointer">News</li>
          <li className="hover:bg-slate-400 cursor-pointer">Learning</li>
        </ul>
      </div>
      <div>
        <h3>You</h3>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Watch later</li>
        </ul>
      </div>

      <div>
        <h3>Settings</h3>
        <ul>
          <li>Help</li>
          <li>contact</li>
          <li>send feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
