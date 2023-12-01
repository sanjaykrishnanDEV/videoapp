import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appslice";
const Videoplayer = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div>
      <div className="border-3 p-5 bg-black  h-screen w-screen">
        <iframe
          className="w-screen h-full "
          src={"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videoplayer;
