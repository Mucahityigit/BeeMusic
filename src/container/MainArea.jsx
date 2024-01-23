import React from "react";
import "../App.css";
import NewAlbum from "./NewAlbum";
import FavoriteArtists from "./FavoriteArtists";
import FavoritePlayList from "./FavoritePlayList";
import TrendAlbum from "./TrendAlbum";
import RecommendedTrends from "./RecommendedTrends";
import PlaylistComp from "../components/PlaylistComp";

const MainArea = () => {
  return (
    <div className="flex flex-1 flex-col px-7 py-10 gap-6 w-[79%] ml-[14%] overflow-hidden">
      <NewAlbum />
      <FavoriteArtists />
      <FavoritePlayList />
      <div className="flex gap-11">
        <TrendAlbum />
        <RecommendedTrends />
      </div>
      <PlaylistComp />
    </div>
  );
};

export default MainArea;
