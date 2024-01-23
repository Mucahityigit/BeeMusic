import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { FaPlay } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import SongCard from "../components/SongCard";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
import Loading from "../components/Loading";
import { getArtistAlbums, getListenedAlbum } from "../redux/albumSlice";
import SwiperComp from "../components/SwiperComp";
import { formatDate } from "../utils/functions";
import { getArtistRelatedArtists } from "../redux/artistSlice";
import { setFavorite } from "../redux/favoriteSlice";
const Artist = () => {
  const { albumID } = useParams();
  const dispatch = useDispatch();
  const { artistRelatedArtists } = useSelector((state) => state.artist);
  const { listenedAlbum, artistAlbums } = useSelector((state) => state.album);
  const [isLoading, setIsLoading] = useState(true);
  const { albums } = useSelector((state) => state.favorite);
  const [favoriteID, setFavoriteID] = useState();

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

  useEffect(() => {
    dispatch(getListenedAlbum(albumID));
    dispatch(getArtistAlbums(listenedAlbum.artists[0].id));
    dispatch(getArtistRelatedArtists(listenedAlbum.artists[0].id));
  }, [dispatch, albumID, listenedAlbum.artists[0].id]);

  useEffect(() => {
    if (Object.keys(listenedAlbum).length > 0) {
      setIsLoading(false);
    }
    console.log(listenedAlbum);
  }, [listenedAlbum]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="w-full h-full ml-[14%] p-7 bg-bgImage bg-cover pb-[100px]">
        <div className="flex gap-10 pt-5 pb-10">
          <div
            className={`relative w-[600px] h-[630px] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]`}
          >
            {favoriteID === listenedAlbum.id ? (
              <MdFavorite
                className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(16,28,53,0.53)] rounded-lg backdrop-blur-sm text-bgLinearFirst cursor-pointer transition "
                onClick={() => handleFavorite(listenedAlbum)}
              />
            ) : (
              <MdFavoriteBorder
                className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(16,28,53,0.53)] rounded-lg backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition "
                onClick={() => handleFavorite(listenedAlbum)}
              />
            )}

            <img
              className="w-[100%] h-[100%] rounded-[30px] object-cover object-left-top "
              src={`${listenedAlbum?.images[0].url}`}
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col max-w-[970px] justify-center gap-4">
            <div className="flex flex-col">
              <h1 className="text-[2.5em] text-activeColor font-bold truncate ...">
                {listenedAlbum?.name}
              </h1>
              <Link
                to={`/artist/${listenedAlbum.artists[0].id}`}
                className="transition-all ease-in-out duration-300 text-xl text-bgLinearSecond font-bold hover:text-bgLinearFirst cursor-pointer"
              >
                {listenedAlbum.artists[0].name}
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {listenedAlbum?.genres.map((genre, i) => (
                <div
                  key={i}
                  className="py-3 px-4 bg-bgGradient rounded-[20px] text-activeColor"
                >
                  {genre}
                </div>
              ))}
              <span className="py-3 px-4 bg-bgGradient rounded-[20px] text-activeColor">
                <span className="text-bgLinearFirst font-bold">
                  release date :
                </span>{" "}
                {formatDate(listenedAlbum?.release_date)}
              </span>
              <span className="py-3 px-4 bg-bgGradient rounded-[20px] text-activeColor">
                <span className="text-bgLinearFirst font-bold">
                  popularity :
                </span>{" "}
                {listenedAlbum?.popularity} / 100
              </span>
            </div>
            <div className="flex flex-col w-full h-[455px] p-3 bg-[rgba(255,255,255,.04)] rounded-xl">
              <div className=" overflow-auto  custom-scrollbar">
                {listenedAlbum.tracks.items?.map((track, index) => (
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
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <SwiperComp
            data={artistAlbums}
            title={`More by ${listenedAlbum.artists[0].name}`}
            card="album"
            slidesPerView={6}
          />
          <SwiperComp
            data={artistRelatedArtists}
            title={`Recommended for listening to ${listenedAlbum.artists[0].name}`}
            card="multi"
            slidesPerView={8}
          />
        </div>
      </div>
    );
  }
};

export default Artist;
