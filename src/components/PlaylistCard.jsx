import React from "react";
import { FaPlay } from "react-icons/fa";
import img1 from "../assets/img1.png";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setFavorite } from "../redux/favoriteSlice";

const PlaylistCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };

  return (
    <div className="relative m-[5px] group">
      <MdFavoriteBorder
        className=" absolute top-5 right-6 p-1 text-[32px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition z-10"
        onClick={() => handleFavorite(data)}
      />
      {/* <MdFavorite className=" absolute top-5 right-5 cursor-pointer transition text-2xl " /> */}
      <div className="transition flex flex-col justify-center items-start px-[10px] gap-2 w-[225px] h-[195px] rounded-xl bg-bgCard cursor-pointer hover:bg-[#28334A]">
        <div className="w-[205px] h-[115px]">
          <img
            className="w-[100%] h-[100%] object-cover object-top rounded-xl"
            src={data?.images[0].url}
            alt=""
          />
        </div>
        <div className="text-sm text-activeColor ">{data?.name}</div>
        <div className="text-sm text-passiveColor ">
          {data?.tracks.total} Tracks
        </div>
      </div>
      <div className=" absolute flex justify-center items-center p-2 bottom-4 right-6 bg-[rgba(255,255,255,.2)] rounded-full backdrop-blur-sm text-activeColor cursor-pointer transition">
        <FaPlay className=" transition text-[18px] group-hover:text-bgLinearFirst" />
      </div>
    </div>
  );
};

export default PlaylistCard;
