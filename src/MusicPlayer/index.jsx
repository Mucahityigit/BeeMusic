import React from "react";
import SongInfo from "./SongInfo";
import Controller from "./Controller";
import PlaybackBar from "./PlaybackBar";

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 z-10 flex justify-between items-center w-full h-[100px] bg-[rgba(8,15,29,.95)] px-7">
      <SongInfo />
      <div className="flex flex-col gap-4 items-center">
        <Controller />
        <PlaybackBar />
      </div>
      <div>asd</div>
    </div>
  );
};

export default MusicPlayer;
