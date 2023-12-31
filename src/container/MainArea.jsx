import React from "react";
import "../App.css";
import NewAlbum from "./NewAlbum";
import FavoriteArtists from "./FavoriteArtists";
import FavoritePlayList from "./FavoritePlayList";
import Trending from "./TrendAlbum";
import RecommendedTrends from "./RecommendedTrends";

const MainArea = () => {
  return (
    <div className="flex flex-col px-7 py-10 gap-6 w-[79%] ml-[14%] mr-[17%] overflow-hidden">
      <NewAlbum />
      <FavoriteArtists />
      <FavoritePlayList />
      <div className="flex gap-11">
        <Trending />
        <RecommendedTrends />
      </div>
    </div>
  );
};

export default MainArea;
