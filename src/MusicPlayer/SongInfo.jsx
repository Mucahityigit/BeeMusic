import React from "react";
import album from "../assets/album.png";
import { MdFavoriteBorder } from "react-icons/md";
const SongInfo = () => {
  return (
    <div className="flex justify-between items-center gap-5 p-2">
      <div className="w-[70px] h-[70px] rounded-xl overflow-hidden">
        <img className="w-[100%] h-[100%]" src={album} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="text-sm text-activeColor">song name</div>
        <div className="text-sm text-passiveColor">artist name</div>
      </div>
      <div className="text-activeColor">
        <MdFavoriteBorder className=" p-1 text-[30px] text-activeColor cursor-pointer" />
        {/* <MdFavorite className=" absolute top-5 right-5 cursor-pointer transition text-2xl " /> */}
      </div>
    </div>
  );
};

export default SongInfo;
