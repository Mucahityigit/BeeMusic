import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwiperComp from "../components/SwiperComp";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
import RecommendedSongCard from "../components/RecommendedSongCard";
import MultiPurposeCard from "../components/MultiPurposeCard";
import AlbumCard from "../components/AlbumCard";
import PlaylistCard from "../components/PlaylistCard";
import { Link } from "react-router-dom";
const Favorite = () => {
  const [activeTab, setActiveTab] = useState("songs");
  const { songs, artists, albums, playlists } = useSelector(
    (state) => state.favorite
  );
  const dispatch = useDispatch();

  const selectActiveSong = (data, track, index, value) => {
    dispatch(setActiveSong({ data, track, index }));
    dispatch(setIsPlaying(value));
  };

  return (
    <div className="w-full min-h-[100vh] p-7 lg:ml-[14%] ml-0 flex flex-col gap-5 bg-bgImage bg-cover">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap sm:justify-start justify-between -mb-px sm:text-md text-xs ">
          <li
            className={`${
              activeTab === "songs"
                ? "text-bgLinearFirst border-bgLinearFirst"
                : null
            } me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-bgLinearFirst hover:border-bgLinearFirst cursor-pointer `}
            onClick={() => setActiveTab("songs")}
          >
            Songs
          </li>
          <li
            className={`${
              activeTab === "albums"
                ? "text-bgLinearFirst border-bgLinearFirst"
                : null
            } me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-bgLinearFirst hover:border-bgLinearFirst  cursor-pointer`}
            onClick={() => setActiveTab("albums")}
          >
            Albums
          </li>
          <li
            className={`${
              activeTab === "playlists"
                ? "text-bgLinearFirst border-bgLinearFirst"
                : null
            } me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-bgLinearFirst hover:border-bgLinearFirst cursor-pointer `}
            onClick={() => setActiveTab("playlists")}
          >
            Playlists
          </li>
          <li
            className={`${
              activeTab === "artists"
                ? "text-bgLinearFirst border-bgLinearFirst"
                : null
            } me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-bgLinearFirst hover:border-bgLinearFirst cursor-pointer `}
            onClick={() => setActiveTab("artists")}
          >
            Artists
          </li>
        </ul>
      </div>
      <div
        className={`${
          activeTab === "songs" ? "flex" : "hidden"
        } flex-wrap sm:justify-normal justify-center gap-y-4 gap-x-12 `}
      >
        {songs?.map((song, index) => (
          <div key={index}>
            <RecommendedSongCard
              data={songs}
              track={song}
              selectActiveSong={selectActiveSong}
              index={index}
            />
          </div>
        ))}
      </div>
      <div
        className={`${
          activeTab === "albums" ? "flex" : "hidden"
        } flex-wrap sm:justify-normal justify-center gap-y-4 gap-x-12 `}
      >
        {albums?.map((album, index) => (
          <div key={index}>
            <AlbumCard data={album} />
          </div>
        ))}
      </div>
      <div
        className={`${
          activeTab === "playlists" ? "flex" : "hidden"
        } flex-wrap sm:justify-normal justify-center gap-y-4 gap-x-12 `}
      >
        {playlists?.map((playlist, index) => (
          <div key={index}>
            <PlaylistCard data={playlist} />
          </div>
        ))}
      </div>
      <div
        className={`${
          activeTab === "artists" ? "flex" : "hidden"
        } flex-1 flex-wrap sm:justify-normal justify-center gap-y-4 gap-x-12 `}
      >
        {artists?.map((artist, index) => (
          <div key={index}>
            <MultiPurposeCard data={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
