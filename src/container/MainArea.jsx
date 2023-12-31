import React from "react";
import "../App.css";
import NewAlbum from "./NewAlbum";
import FavoriteArtists from "./FavoriteArtists";

const MainArea = () => {
  return <div className="flex bg-bgImage bg-cover w-[79%] ml-[14%] mr-[17%]">
    <NewAlbum/>
    <FavoriteArtists/>
  </div>;
};

export default MainArea;
