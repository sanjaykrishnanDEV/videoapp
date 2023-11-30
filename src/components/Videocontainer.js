import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Videotile from "./Videotile";

const Videocontainer = () => {
  const [movieData, setMovieData] = useState([]);
 // console.log(movieData);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    if (movieData.length === 0) {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setMovieData(json.items);
    }
  };
  return (
    <div className="flex flex-wrap justify-center items">
      <Videotile info={movieData[0]}/>
      <Videotile info={movieData[11]}/>
      {movieData.map((item)=><Videotile info={item} key={item.id}/>)}
    </div>
  );
};

export default Videocontainer;
