/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../redux/playerSlice";

const Player = ({ volume, seekTime, onTimeUpdate, onLoadedData, repeat }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions

  const onEnded = () => {
    dispatch(setIsPlaying(false));
  };

  useEffect(() => {
    if (Object.keys(activeSong).length > 0) {
      if (ref.current) {
        if (isPlaying) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      }
    }

    console.log(activeSong);
  }, [activeSong, isPlaying]);

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong ? activeSong.preview_url : undefined}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
