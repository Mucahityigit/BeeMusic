import React from "react";
import artist from "../assets/artist.jpg";
import { GoPlay } from "react-icons/go";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const SongCard = () => {
  return (
    <div className="flex flex-row items-center gap-4 text-passiveColor py-4 pr-3 group ">
      <div className="flex justify-center items-center w-[55px] h-[55px] rounded-full overflow-hidden">
        <img src={artist} alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="flex flex-auto flex-col">
        <div className=" transition text-md font-bold text-activeColor hover:text-bgLinearFirst cursor-pointer">
          Calm Down
        </div>
        <div className="text-sm cursor-pointer hover:text-bgLinearFirst ">
          Selana Gomez
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end gap-5 mr-2">
        <span className="text-md">03:25</span>
        <GoPlay className="transition text-[26px] hover:text-bgLinearFirst cursor-pointer" />
        <MdFavoriteBorder className="transition text-[26px] hover:text-bgLinearFirst cursor-pointer" />
      </div>
    </div>
  );
};

export default SongCard;
