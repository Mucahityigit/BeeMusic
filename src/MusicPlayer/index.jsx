import React, { useState } from "react";
import SongInfo from "./SongInfo";
import Controller from "./Controller";
import PlaybackBar from "./PlaybackBar";
import { useSelector } from "react-redux";
import Player from "./Player";
import VolumeBar from "./VolumeBar";

const MusicPlayer = () => {
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);

  const { activeSong, isPlaying, currentSongs } = useSelector(
    (state) => state.player
  );

  return (
    <div
      className={` ${
        Object.keys(activeSong).length > 0
          ? "transition-all ease-in-out duration-500 flex h-[100px]"
          : "hidden "
      }  fixed lg:bottom-0 bottom-[80px] left-0 z-10  justify-between items-center w-full h-[100px] bg-[rgba(8,15,29,.95)] px-7`}
    >
      <SongInfo activeSong={activeSong} isPlaying={isPlaying} />
      <div className="flex flex-col gap-4 items-center">
        <Controller activeSong={activeSong} isPlaying={isPlaying} />
        <PlaybackBar
          onInput={(event) => setSeekTime(event.target.value)}
          value={appTime}
          min="0"
          max={duration}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          seekTime={seekTime}
          volume={volume}
          repeat={repeat}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
        <VolumeBar
          value={volume}
          min="0"
          max="1"
          onChange={(event) => setVolume(event.target.value)}
          setVolume={setVolume}
        />
    </div>
  );
};

export default MusicPlayer;
