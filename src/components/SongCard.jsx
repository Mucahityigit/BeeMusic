import React, { useEffect } from "react";
import artist from "../assets/artist.jpg";
import { GoPlay } from "react-icons/go";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdPauseCircleOutline,
} from "react-icons/md";
import { millisecondToFormat } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../redux/playerSlice";

const SongCard = ({ data, track, selectActiveSong, index }) => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  return (
    <div
      className={` ${
        isPlaying && track.id === activeSong.id ? "bg-[#28334A]" : ""
      }  flex flex-row items-center gap-2 text-passiveColor p-4 mr-1 pr-3 group hover:bg-[#28334A] rounded-lg `}
      onClick={() => selectActiveSong(data.tracks.items, track, index, true)}
    >
      <div className=" w-[20px] text-passiveColor">{index + 1}</div>
      <div className="flex flex-auto flex-col">
        <div className=" transition text-sm font-bold text-activeColor">
          <span
            className={`${
              isPlaying && track.id === activeSong.id
                ? "text-bgLinearFirst "
                : ""
            }hover:text-bgLinearFirst cursor-pointer`}
          >
            {track?.name}
          </span>
        </div>
        <div className="text-sm">
          {track?.artists.map((artist, index) => (
            <span
              className=" hover:text-bgLinearFirst cursor-pointer"
              key={index}
            >
              {artist.name}
              {index !== track.artists.length - 1 && " , "}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end gap-5 mr-2">
        <span className="text-sm">
          {millisecondToFormat(track?.duration_ms)}
        </span>
        {isPlaying && track.id === activeSong.id ? (
          <MdPauseCircleOutline
            className="transition text-[22px] text-bgLinearFirst cursor-pointer"
            onClick={() => dispatch(setIsPlaying(false))}
          />
        ) : (
          <GoPlay
            className="transition text-[22px] hover:text-bgLinearFirst cursor-pointer"
            onClick={() =>
              selectActiveSong(data.tracks.items, track, index, true)
            }
          />
        )}
        <MdFavoriteBorder className="transition text-[22px] hover:text-bgLinearFirst cursor-pointer" />
      </div>
    </div>
  );
};

export default SongCard;
