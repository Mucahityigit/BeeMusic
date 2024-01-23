import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { setFavorite } from "../redux/favoriteSlice";
import { useDispatch } from "react-redux";
const MultiPurposeCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };

  return (
    <div className="relative m-[5px] group">
      <div className="transition-all ease-in-out duration-300 flex flex-col justify-between py-3 items-center gap-2 w-[150px] h-[200px] rounded-xl bg-bgCard cursor-pointer group hover:bg-[#28334A]">
        <div className="relative w-[120px] h-[140px]">
          <MdFavoriteBorder
            className=" absolute top-2 right-2 p-1 text-[30px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition z-10"
            onClick={() => handleFavorite(data)}
          />
          {/* <MdFavorite className=" absolute top-5 right-5 cursor-pointer transition text-2xl " /> */}

          <img
            className="w-[100%] h-[100%] rounded-xl"
            src={data?.images[2].url}
            alt=""
          />
        </div>
        <div className="transition-all ease-in-out duration-300 text-sm text-activeColor group-hover:text-bgLinearFirst ">
          {data?.name}
        </div>
      </div>
    </div>
  );
};

export default MultiPurposeCard;
