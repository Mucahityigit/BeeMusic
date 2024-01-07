import React from "react";
import artist from "../assets/artist1.png";
const MultiPurposeCard = ({data}) => {
  return (
    <div className="m-[5px] group">
      <div className="transition-all ease-in-out duration-300 flex flex-col justify-between py-3 items-center gap-2 w-[150px] h-[200px] rounded-xl bg-bgCard cursor-pointer group hover:bg-[#28334A]">
        <div className="w-[120px] h-[140px]">
          <img className="w-[100%] h-[100%] rounded-xl" src={data?.images[2].url} alt="" />
        </div>
        <div className="transition-all ease-in-out duration-300 text-sm text-activeColor group-hover:text-bgLinearFirst ">{data?.name}</div>
      </div>
    </div>
  );
};

export default MultiPurposeCard;
