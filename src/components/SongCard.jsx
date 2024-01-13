import React from "react";
import artist from "../assets/artist.jpg";
import { GoPlay } from "react-icons/go";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { millisecondToFormat } from "../utils/functions";

const SongCard = ({ data, index }) => {
  return (
    <div className="flex flex-row items-center gap-2 text-passiveColor p-4 mr-1 pr-3 group hover:bg-[#28334A] rounded-lg ">
      {/* <div className="flex justify-center items-center w-[55px] h-[55px] rounded-full overflow-hidden">
        <img src={data} alt="" className="w-full h-full bg-cover" />
      </div> */}
      <div className=" w-[20px] text-passiveColor">{index + 1}</div>
      <div className="flex flex-auto flex-col">
        <div className=" transition text-sm font-bold text-activeColor">
          <span className="hover:text-bgLinearFirst cursor-pointer">
            {data?.name}
          </span>
        </div>
        <div className="text-sm">
          {data?.artists.map((artist, index) => (
            <span
              className=" hover:text-bgLinearFirst cursor-pointer"
              key={index}
            >
              {artist.name}
              {index !== data.artists.length - 1 && " , "}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end gap-5 mr-2">
        <span className="text-sm">
          {millisecondToFormat(data?.duration_ms)}
        </span>
        <GoPlay className="transition text-[22px] hover:text-bgLinearFirst cursor-pointer" />
        <MdFavoriteBorder className="transition text-[22px] hover:text-bgLinearFirst cursor-pointer" />
      </div>
    </div>
  );
};

export default SongCard;
