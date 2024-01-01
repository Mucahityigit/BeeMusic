import React from "react";
import "../App.css";
import NewAlbum from "./NewAlbum";
import FavoriteArtists from "./FavoriteArtists";
import FavoritePlayList from "./FavoritePlayList";

const MainArea = () => {
  return (
    <div className="flex flex-col px-7 py-10 gap-6  bg-bgImage bg-cover w-[79%] ml-[14%] mr-[17%] overflow-hidden">
      <NewAlbum />
      <FavoriteArtists />
      <FavoritePlayList />
    </div>
  );
};

export default MainArea;
