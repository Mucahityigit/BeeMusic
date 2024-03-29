import React, { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import newAlbum from "../assets/album.png";
import { FaPlay } from "react-icons/fa";
import SongCard from "../components/SongCard";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { formatDate } from "../utils/functions";
import { getListenedAlbum } from "../redux/albumSlice";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
import { Link } from "react-router-dom";
import { setFavorite } from "../redux/favoriteSlice";
const TrendAlbum = () => {
  const dispatch = useDispatch();
  const { listenedAlbum, listenedAlbumID } = useSelector(
    (state) => state.album
  );
  const { albums } = useSelector((state) => state.favorite);
  const [favoriteID, setFavoriteID] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const selectActiveSong = (data, track, index, value) => {
    dispatch(setActiveSong({ data, track, index }));
    dispatch(setIsPlaying(value));
  };
  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };
  useEffect(() => {
    // Eğer favori şarkılar içerisinde track varsa favoriID'yi set et
    const isFavorite = albums.some((album) => album.id === listenedAlbum?.id);
    setFavoriteID(isFavorite ? listenedAlbum.id : null);
  }, [albums]);

  const getRandomTrack = () => {
    const index = Math.floor(Math.random() * listenedAlbum.tracks.items.length);
    const track = listenedAlbum.tracks.items[index];
    selectActiveSong(listenedAlbum, track, index, true);
  };

  useEffect(() => {
    dispatch(getListenedAlbum(listenedAlbumID));
  }, [dispatch, listenedAlbumID]);

  useEffect(() => {
    if (Object.keys(listenedAlbum).length > 0) {
      setIsLoading(false);
    }
  }, [listenedAlbum]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-col bg-bgColor pt-3 pb-7 pl-5 pr-4 rounded-[30px]">
        <div className="flex gap-7 pt-5 pb-7 mb-3 border-b border-[rgba(255,255,255,.2)]">
          <div className="relative w-[200px] h-[220px] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]">
            {listenedAlbum.id === favoriteID ? (
              <MdFavorite
                className=" absolute top-4 right-4 p-1 text-[36px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-bgLinearFirst cursor-pointer transition z-20"
                onClick={() => handleFavorite(listenedAlbum)}
              />
            ) : (
              <MdFavoriteBorder
                className=" absolute top-4 right-4 p-1 text-[36px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition z-20"
                onClick={() => handleFavorite(listenedAlbum)}
              />
            )}
            <img
              className="w-[100%] h-[100%] rounded-[20px]"
              src={listenedAlbum?.images[1].url}
              alt=""
            />
          </div>
          <div className="flex flex-col w-[205px] justify-between gap-5">
            <div className="flex flex-col">
              <Link to={`/album/${listenedAlbum.id}`}>
                <h1 className="transition-all ease-in-out duration-300 text-[1.2em] text-activeColor font-bold hover:text-bgLinearFirst cursor-pointer">
                  {listenedAlbum?.name}
                </h1>
              </Link>
              <Link
                to={`/artist/${listenedAlbum?.artists[0].id}`}
                className="transition-all ease-in-out duration-500 text-md font-bold text-bgLinearSecond cursor-pointer hover:text-bgLinearFirst"
              >
                {listenedAlbum?.artists[0].name}
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-md font-bold text-activeColor">
                {" "}
                {formatDate(listenedAlbum?.release_date)}
              </div>
              <div className="flex gap-5">
                <div className="transiton text-md text-activeColor font-bold">
                  {listenedAlbum.total_tracks} Tracks
                </div>
                <div className="transiton text-md text-activeColor font-bold">
                  <span className="text-bgLinearFirst">
                    {listenedAlbum.popularity}
                  </span>{" "}
                  / 100
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="transition-all ease-in-out duration-500 flex gap-3 justify-center items-center bg-bgLinearSecond py-[8px] px-4 rounded-[15px] cursor-pointer group hover:bg-activeColor"
                onClick={getRandomTrack}
              >
                <FaPlay className="transition-all ease-in-out duration-500 text-activeColor text-[20px] group-hover:text-bgColor" />
                <span className="transition-all ease-in-out duration-500  text-activeColor text-md font-bold group-hover:text-bgColor">
                  Play
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:max-h-[432px] h-[380px] overflow-y-scroll  custom-scrollbar">
          {listenedAlbum?.tracks.items.map((track, index) => (
            <SongCard
              key={track.id}
              data={listenedAlbum.tracks.items}
              track={track}
              index={index}
              selectActiveSong={selectActiveSong}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default TrendAlbum;
