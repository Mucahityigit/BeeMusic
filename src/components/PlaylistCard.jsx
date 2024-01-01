import React from "react";
import { FaPlay } from "react-icons/fa";
import img1 from "../assets/img1.png";

const PlaylistCard = () => {
  return (
    <div className="m-[5px] group">
      <div className="transition flex flex-col justify-center items-start px-[10px] gap-2 w-[215px] h-[165px] rounded-xl bg-bgCard cursor-pointer hover:bg-[#28334A]">
        <div className="w-[195px] h-[115px]">
          <img
            className="w-[100%] h-[100%] object-cover rounded-xl"
            src={img1}
            alt=""
          />
          <div className=" absolute flex justify-center items-center p-2 bottom-7 right-6 bg-[rgba(255,255,255,.2)] rounded-full backdrop-blur-sm text-activeColor cursor-pointer transition">
            <FaPlay className=" transition text-[18px] group-hover:text-bgLinearFirst" />
          </div>
        </div>
        <div className="text-sm text-activeColor ">Summer Playlist</div>
      </div>
    </div>
  );
};

export default PlaylistCard;
