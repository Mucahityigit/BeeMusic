import React from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { useSelector } from "react-redux";
const Controller = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="flex items-center gap-5">
      <IoIosSkipBackward className="text-passiveColor text-[26px] cursor-pointer hover:text-activeColor transition-all ease-in-out duration-300" />
      {!isPlaying ? (
        <FaCirclePlay className="text-activeColor text-[38px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300" />
      ) : (
        <FaCirclePause className="text-activeColor text-[38px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300" />
      )}
      <IoIosSkipForward className="text-passiveColor text-[26px] cursor-pointer hover:text-activeColor transition-all ease-in-out duration-300" />
    </div>
  );
};

export default Controller;
