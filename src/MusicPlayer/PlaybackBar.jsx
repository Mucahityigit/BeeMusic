import React from "react";

const PlaybackBar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden md:flex  flex-row items-center">
      <p className="text-white">{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="w-24 md:w-56 xl:w-[400px] lg:w-[300px] h-1 mx-4 2xl:mx-6 rounded-lg  "
      />
      <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
    </div>
  );
};

export default PlaybackBar;
