import React from "react";
import artist from "../assets/artist.jpg";
import { FaPlay } from "react-icons/fa";
const LastCard = () => {
  return (
    <div className="flex flex-row items-center gap-4 text-passiveColor border-b-[1px] border-[rgba(255,255,255,.4)] py-3 group ">
      <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full overflow-hidden">
        <img src={artist} alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="flex flex-auto flex-col">
        <div className=" transition text-md text-activeColor hover:text-bgLinearFirst cursor-pointer">
          Calm Down
        </div>
        <div className="text-xs cursor-pointer hover:text-bgLinearFirst ">
          Selana Gomez
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end text-xl mr-2 hover:text-bgLinearFirst cursor-pointer">
        <FaPlay />
      </div>
    </div>
  );
};

export default LastCard;
