import React from "react";
import artist from "../assets/artist.jpg";
import { FaPlay } from "react-icons/fa";
const LastCard = () => {
  return (
    <div className="flex flex-row items-center gap-4 text-passiveColor border-b-[1px] border-gray-400 py-2 group">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
        <img src={artist} alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="flex flex-col">
        <div className=" transition text-lg text-activeColor hover:text-bgLinearFirst cursor-pointer">
          Calm Down
        </div>
        <div className="text-xs cursor-pointer hover:text-bgLinearFirst ">
          Selana Gomez
        </div>
      </div>
      <div className="">
        <FaPlay />
      </div>
    </div>
  );
};

export default LastCard;
