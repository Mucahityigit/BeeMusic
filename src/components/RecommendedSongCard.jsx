import React, { useEffect } from "react";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdPauseCircleOutline,
} from "react-icons/md";
import { GoPlay } from "react-icons/go";
import { millisecondToFormat } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
const RecommendedSongCard = (data) => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const selectActiveSong = (track) => {
    dispatch(setActiveSong(track));
    dispatch(setIsPlaying());
  };

  useEffect(() => {
    console.log(activeSong);
  }, [activeSong]);
  return (
    <div className="relative w-[225px] h-[300px] rounded-[30px] overflow-hidden">
      <MdFavoriteBorder className=" absolute top-4 right-4 p-1 text-[36px]  bg-[rgba(255,255,255,.2)] rounded-md backdrop-blur-sm text-activeColor cursor-pointer transition z-10" />
      {/* <MdFavorite className=" absolute top-5 right-5 cursor-pointer transition text-2xl " /> */}
      <img
        className="w-[100%] h-[100%] object-cover rounded-[20px]"
        src={data.data?.album?.images[1].url}
        alt=""
      />
      <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full px-4 py-3 group rounded-[30px] bg-gradient-to-t from-[rgba(0,0,0,.6)] to-[rgba(0,0,0,.2)]">
        {isPlaying && data.data.id === activeSong.id ? (
          <MdPauseCircleOutline
            className="transition-all ease-in-out duration-500  absolute top-[50%] left-[-50%] translate-x-[-50%] translate-y-[-50%] text-[46px] text-activeColor  hover:text-bgLinearFirst group-hover:left-[50%] cursor-pointer"
            onClick={() => selectActiveSong(data)}
          />
        ) : (
          <GoPlay
            className="transition-all ease-in-out duration-500  absolute top-[50%] left-[-50%] translate-x-[-50%] translate-y-[-50%] text-[46px] text-activeColor  hover:text-bgLinearFirst group-hover:left-[50%] cursor-pointer"
            onClick={() => selectActiveSong(data)}
          />
        )}
        <div className="flex justify-between items-center">
          <div className="text-md text-activeColor font-bold tracking-wider">
            {data.data?.name.substring(0, 30)}
          </div>
          <div className="text-md text-passiveColor">
            {millisecondToFormat(data.data?.duration_ms)}
          </div>
        </div>
        <div className="text-md text-activeColor">
          {data.data?.artists[0].name}
        </div>
      </div>
    </div>
  );
};

export default RecommendedSongCard;
