import React from "react";
import { FaPlay } from "react-icons/fa";
import img1 from "../assets/img1.png";

const PlaylistCard = ({data}) => {
  return (
    <div className="m-[5px] group">
      <div className="transition flex flex-col justify-center items-start px-[10px] gap-2 w-[225px] h-[195px] rounded-xl bg-bgCard cursor-pointer hover:bg-[#28334A]">
        <div className="w-[205px] h-[115px]">
          <img
            className="w-[100%] h-[100%] object-cover object-top rounded-xl"
            src={data?.images[0].url}
            alt=""
          />
          <div className=" absolute flex justify-center items-center p-2 bottom-6 right-4 bg-[rgba(255,255,255,.2)] rounded-full backdrop-blur-sm text-activeColor cursor-pointer transition">
            <FaPlay className=" transition text-[18px] group-hover:text-bgLinearFirst" />
          </div>
        </div>
        <div className="text-sm text-activeColor ">{data?.name}</div>
        <div className="text-sm text-passiveColor ">{data?.tracks.total} Trakcs</div>
      </div>
    </div>
  );
};

export default PlaylistCard;
