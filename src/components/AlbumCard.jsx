import React from "react";
import artist from "../assets/artist1.png";
const ArtistCard = () => {
  return (
    <div className="m-[5px] group">
      <div className="transition flex flex-col justify-center items-center gap-2 w-[135px] h-[135px] rounded-xl bg-bgCard cursor-pointer hover:bg-[#28334A]">
        <div className="w-[90px] h-[90px]">
          <img className="w-[100%] h-[100%] rounded-full" src={artist} alt="" />
        </div>
        <div className="text-sm text-activeColor ">Pop</div>
      </div>
    </div>
  );
};

export default ArtistCard;
