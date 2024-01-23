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
import { Link } from "react-router-dom";
import { setFavorite } from "../redux/favoriteSlice";

const SongCard = ({ data, track, selectActiveSong, index }) => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };

  console.log(track);

  return (
    <div
      className={` ${
        isPlaying && track.id === activeSong.id
          ? "bg-[rgba(255,255,255,.1)]"
          : ""
      }  flex flex-row items-center gap-2 text-passiveColor p-4 mr-1 pr-3 group hover:bg-[rgba(255,255,255,.1)] rounded-lg `}
      onDoubleClick={() => selectActiveSong(data, track, index, true)}
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
            <Link
              to={`/artist/${artist.id}`}
              className=" hover:text-bgLinearFirst cursor-pointer"
              key={index}
            >
              {artist.name}
              {index !== track.artists.length - 1 && " , "}
            </Link>
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
            onClick={() => selectActiveSong(data, track, index, true)}
          />
        )}
        <MdFavoriteBorder
          className="transition text-[22px] hover:text-bgLinearFirst cursor-pointer"
          onClick={() => handleFavorite(track)}
        />
      </div>
    </div>
  );
};

export default SongCard;
