import React, { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import SongCard from "../components/SongCard";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
import { RiPlayList2Line } from "react-icons/ri";
import { setFavorite } from "../redux/favoriteSlice";
const PlaylistComp = () => {
  const dispatch = useDispatch();
  const { playlist } = useSelector((state) => state.playlist);
  const [isActive, setIsActive] = useState(false);
  let tracks = [];
  const [isLoading, setIsLoading] = useState(true);

  const { playlists } = useSelector((state) => state.favorite);
  const [favoriteID, setFavoriteID] = useState();

  useEffect(() => {
    // Eğer favori şarkılar içerisinde track varsa favoriID'yi set et
    const isFavorite = playlists.some(
      (favPlaylist) => favPlaylist.id === playlist?.id
    );
    setFavoriteID(isFavorite ? playlist.id : null);
  }, [playlists, playlist]);

  const selectActiveSong = (data, track, index, value) => {
    dispatch(setActiveSong({ data, track, index }));
    dispatch(setIsPlaying(value));
  };
  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };

  useEffect(() => {
    if (Object.keys(playlist).length > 0) {
      setIsLoading(false);
      setIsActive(true);
    }
  }, [playlist]);

  if (isLoading) {
    return null;
  } else {
    if (!isActive) {
      return (
        <div
          className="transition-all ease-in-out duration-300 fixed right-1 sm:top-[44%] top-12 flex justify-center items-center w-[50px] h-[50px] bg-bgColor rounded-lg cursor-pointer group hover:bg-[#28334A] z-40"
          onClick={() => setIsActive(true)}
        >
          <RiPlayList2Line className="text-2xl text-activeColor group-hover:text-bgLinearFirst" />
        </div>
      );
    } else {
      return (
        <div className="transition-all ease-in-out duration-300 fixed sm:top-[20%] top-[50px] right-1 flex flex-col sm:w-[400px] w-[90%]  bg-bgColor pt-3 pb-7 pl-5 pr-4 rounded-[30px] z-40">
          <div
            className=" transition-all ease-in-out duration-300 absolute right-3 top-3 p-1 rounded-full hover:bg-[#28334A] cursor-pointer "
            onClick={() => setIsActive(false)}
          >
            <IoMdClose className="text-3xl text-activeColor hover:text-bgLinearFirst" />
          </div>
          <div className="flex gap-7 pt-5 pb-7 mb-3 border-b border-[rgba(255,255,255,.2)]">
            <div className="relative w-[110px] h-[120px] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]">
              {favoriteID === playlist.id ? (
                <MdFavorite
                  className=" absolute top-3 right-3 p-1 text-[30px]  bg-[rgba(255,255,255,.2)] rounded-md backdrop-blur-sm text-bgLinearFirst cursor-pointer "
                  onClick={() => handleFavorite(playlist)}
                />
              ) : (
                <MdFavoriteBorder
                  className=" absolute top-3 right-3 p-1 text-[30px]  bg-[rgba(255,255,255,.2)] rounded-md backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer "
                  onClick={() => handleFavorite(playlist)}
                />
              )}
              <img
                className="w-[100%] h-[100%] rounded-[20px]"
                src={playlist?.images[0].url}
                alt=""
              />
            </div>
            <div className="flex flex-col w-[205px] justify-center gap-2">
              <div className="flex flex-col">
                <h1 className="transition-all ease-in-out duration-300 text-[1.2em] text-activeColor font-bold hover:text-bgLinearFirst cursor-pointer">
                  {playlist?.name}
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="transiton text-md text-activeColor font-bold">
                  {playlist?.tracks.items.length} Tracks
                </div>
              </div>
              <div className="flex gap-2  text-md text-activeColor font-bold">
                <span>Followers :</span>
                <span className="text-bgLinearFirst">
                  {playlist.followers.total}
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col max-h-[300px] overflow-y-scroll  custom-scrollbar">
            {playlist.tracks.items?.map((item, index) => {
              tracks.push(item.track);
              return (
                <SongCard
                  key={item.track.id}
                  data={tracks}
                  track={item.track}
                  index={index}
                  selectActiveSong={selectActiveSong}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
};

export default PlaylistComp;
