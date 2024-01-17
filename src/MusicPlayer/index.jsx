import React from "react";
import SongInfo from "./SongInfo";
import Controller from "./Controller";
import PlaybackBar from "./PlaybackBar";
import { useSelector } from "react-redux";
import Player from "./Player";

const MusicPlayer = () => {
  const { activeSong, isPlaying, currentSongs } = useSelector(
    (state) => state.player
  );

  return (
    <div
      className={` ${
        Object.keys(activeSong).length > 0
          ? "transition-all ease-in-out duration-500 flex h-[100px]"
          : "hidden "
      }  fixed bottom-0 left-0 z-10  justify-between items-center w-full h-[0px] bg-[rgba(8,15,29,.95)] px-7`}
    >
      <SongInfo activeSong={activeSong} isPlaying={isPlaying} />
      <div className="flex flex-1 flex-col gap-4 items-center">
        <Controller activeSong={activeSong} isPlaying={isPlaying} />
        <PlaybackBar />
        <Player />
      </div>
      <div className="flex flex-1">
        <div></div>
      </div>
    </div>
  );
};

export default MusicPlayer;
