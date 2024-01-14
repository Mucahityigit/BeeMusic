import React, { useEffect } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { nextSong, prevSong, setIsPlaying } from "../redux/playerSlice";
const Controller = ({ activeSong, isPlaying }) => {
  const dispatch = useDispatch();

  const changeIsPlaying = (value) => {
    dispatch(setIsPlaying(value));
  };

  const selectNextSong = () => {
    dispatch(nextSong());
  };
  const selectPrevSong = () => {
    dispatch(prevSong());
  };

  return (
    <div className="flex items-center gap-5">
      <IoIosSkipBackward
        className="text-passiveColor text-[26px] cursor-pointer hover:text-activeColor transition-all ease-in-out duration-300"
        onClick={selectPrevSong}
      />
      {!isPlaying ? (
        <FaCirclePlay
          className="text-activeColor text-[38px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
          onClick={() => changeIsPlaying(true)}
        />
      ) : (
        <FaCirclePause
          className="text-activeColor text-[38px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
          onClick={() => changeIsPlaying(false)}
        />
      )}
      <IoIosSkipForward
        className="text-passiveColor text-[26px] cursor-pointer hover:text-activeColor transition-all ease-in-out duration-300"
        onClick={selectNextSong}
      />
    </div>
  );
};

export default Controller;
