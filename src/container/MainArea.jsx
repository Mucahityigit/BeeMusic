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
    <div className="flex flex-col lg:px-7 px-5 py-10 gap-6 w-[100%] xl:ml-[14%]  lg:ml-[200px] ml-0  overflow-hidden">
      <NewAlbum />
      <FavoriteArtists />
      <FavoritePlayList />
      <div className="flex lg:flex-row flex-col gap-11">
        <TrendAlbum />
        <RecommendedTrends />
      </div>
      <PlaylistComp />
    </div>
  );
};

export default MainArea;
