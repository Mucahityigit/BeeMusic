import React from "react";

const PlaybackBar = ({ value, min, max, onInput }) => {
  return (
    <div className="w-[600px] sm:flex flex-row items-center">
      {/* <p className="text-white">{value === 0 ? "0:00" : getTime(value)}</p> */}
      <input
        type="range"
        step="any"
        value={value}
        min={0}
        max={163124}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-full h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      {/* <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p> */}
    </div>
  );
};

export default PlaybackBar;
