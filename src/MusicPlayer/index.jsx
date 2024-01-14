import React from "react";
import SongInfo from "./SongInfo";
import Controller from "./Controller";
import PlaybackBar from "./PlaybackBar";
import { useSelector } from "react-redux";

const MusicPlayer = () => {
  const { activeSong, isPlaying, currentSongs } = useSelector(
    (state) => state.player
  );

  return (
    <div
      className={` ${
        Object.keys(activeSong).length > 0 ? "flex" : "hidden "
      }  fixed bottom-0 left-0 z-10  justify-between items-center w-full h-[100px] bg-[rgba(8,15,29,.95)] px-7`}
    >
      <SongInfo activeSong={activeSong} isPlaying={isPlaying} />
      <div className="flex flex-1 flex-col gap-4 items-center">
        <Controller activeSong={activeSong} isPlaying={isPlaying} />
        <PlaybackBar />
      </div>
      <div className="flex flex-1">
        <div></div>
      </div>
    </div>
  );
};

export default MusicPlayer;
