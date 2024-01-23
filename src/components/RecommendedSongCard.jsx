import React, { useEffect, useState } from "react";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdPauseCircleOutline,
} from "react-icons/md";
import { GoPlay } from "react-icons/go";
import { millisecondToFormat } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../redux/playerSlice";
import { Link } from "react-router-dom";
import { setFavorite } from "../redux/favoriteSlice";

const RecommendedSongCard = ({ data, track, selectActiveSong, index }) => {
  const dispatch = useDispatch();
  const [favoriteID, setFavoriteID] = useState();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { songs } = useSelector((state) => state.favorite);
  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };

  useEffect(() => {
    // Eğer favori şarkılar içerisinde track varsa favoriID'yi set et
    const isFavorite = songs.some((song) => song.id === track?.id);
    setFavoriteID(isFavorite ? track.id : null);
  }, [songs, track]);
  return (
    <div className="relative w-[225px] h-[300px] rounded-[30px] overflow-hidden">
      {track.id === favoriteID ? (
        <MdFavorite
          className=" absolute top-4 right-4 p-1 text-[36px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-bgLinearFirst cursor-pointer z-10"
          onClick={() => handleFavorite(track)}
        />
      ) : (
        <MdFavoriteBorder
          className=" absolute top-4 right-4 p-1 text-[36px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-activeColor  hover:text-bgLinearFirst cursor-pointer z-10"
          onClick={() => handleFavorite(track)}
        />
      )}
      <img
        className="w-[100%] h-[100%] object-cover rounded-[20px]"
        src={track?.album?.images[1].url}
        alt=""
      />
      <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full  group rounded-[30px] bg-gradient-to-t from-[rgba(0,0,0,.6)] to-[rgba(0,0,0,.2)]">
        {isPlaying && track.id === activeSong.id ? (
          <div className="transition-all ease-in-out duration-500 absolute w-full h-full flex justify-center items-center bg-[rgba(16,28,53,.7)]">
            <MdPauseCircleOutline
              className="text-[46px] text-bgLinearFirst  cursor-pointer"
              onClick={() => dispatch(setIsPlaying(false))}
            />
          </div>
        ) : (
          <GoPlay
            className="transition-all ease-in-out duration-500  absolute top-[50%] left-[-50%] translate-x-[-50%] translate-y-[-50%] text-[46px] text-activeColor  hover:text-bgLinearFirst group-hover:left-[50%] cursor-pointer"
            onClick={() => selectActiveSong(data, track, index, true)}
          />
        )}
        <div className="flex justify-between px-4 items-center">
          <Link
            to={`./track/${track?.id}`}
            className="text-md text-activeColor font-bold tracking-wider cursor-pointer hover:text-bgLinearFirst"
          >
            {track?.name.substring(0, 30)}
          </Link>
          <div className="text-md text-passiveColor">
            {millisecondToFormat(track?.duration_ms)}
          </div>
        </div>
        <Link
          to={`./artist/${track?.artists[0].id}`}
          className="text-md text-activeColor px-4 pb-3 cursor-pointer hover:text-bgLinearFirst"
        >
          {track?.artists[0].name}
        </Link>
      </div>
    </div>
  );
};

export default RecommendedSongCard;
