import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Videotile from "./Videotile";
import { Link } from "react-router-dom";

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
      <Videotile info={movieData[0]} />
      <Videotile info={movieData[11]} />
      {movieData.map((item) => (
        <Link to={"/watch?v=" + item.id} key={item.id}>
          <Videotile info={item} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
