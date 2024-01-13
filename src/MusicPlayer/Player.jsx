/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }
  useEffect(() => {
    console.log(activeSong);
  }, [activeSong]);

  // useEffect(() => {
  //   ref.current.volume = volume;
  // }, [volume]);
  // // updates audio element only on seekTime change (and not on each rerender):
  // useEffect(() => {
  //   ref.current.currentTime = seekTime;
  // }, [seekTime]);

  return (
    <audio
      src={activeSong ? activeSong.preview_url : undefined}
      ref={ref}
      // loop={repeat}
      // onEnded={onEnded}
      // onTimeUpdate={onTimeUpdate}
      // onLoadedData={onLoadedData}
    />
  );
};

export default Player;
