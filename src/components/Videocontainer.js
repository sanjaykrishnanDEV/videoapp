import React, { useEffect } from 'react'

const Videocontainer = () => {
    useEffect(()=>{
        getVideos();
    },[])
    function getVideos(){
        
    }
  return (
    <div>Videocontainer</div>
  )
}

export default Videocontainer