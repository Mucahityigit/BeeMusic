import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistById, getArtistRelatedArtists } from "../redux/artistSlice";
import { FaPlay } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { getArtistTopTracks } from "../redux/trackSlice";
import SongCard from "../components/SongCard";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
import Loading from "../components/Loading";
import { getArtistAlbums } from "../redux/albumSlice";
import SwiperComp from "../components/SwiperComp";
import { setFavorite } from "../redux/favoriteSlice";
const Artist = () => {
  const { artistID } = useParams();
  const dispatch = useDispatch();
  const { artist, artistRelatedArtists } = useSelector((state) => state.artist);
  const { artistTopTracks } = useSelector((state) => state.track);
  const { artistAlbums } = useSelector((state) => state.album);
  const [isLoading, setIsLoading] = useState(true);
  const { artists } = useSelector((state) => state.favorite);
  const [favoriteID, setFavoriteID] = useState();

  useEffect(() => {
    // Eğer favori şarkılar içerisinde track varsa favoriID'yi set et
    const isFavorite = artists.some((favArtist) => favArtist.id === artist?.id);
    setFavoriteID(isFavorite ? artist.id : null);
  }, [artists, artist]);

  const selectActiveSong = (data, track, index, value) => {
    dispatch(setActiveSong({ data, track, index }));
    dispatch(setIsPlaying(value));
  };
  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };

  useEffect(() => {
    dispatch(getArtistById(artistID));
    dispatch(getArtistTopTracks(artistID));
    dispatch(getArtistAlbums(artistID));
    dispatch(getArtistRelatedArtists(artistID));
  }, [artistID, dispatch]);

  useEffect(() => {
    if (Object.keys(artistTopTracks).length > 0) {
      setIsLoading(false);
    }
  }, [artistTopTracks]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="w-full h-full lg:ml-[14%] p-7 bg-bgImage bg-cover pb-[100px]">
        <div className="flex gap-10 pt-5 pb-10 lg:flex-row  flex-col justify-center items-center md:w-[] ">
          <div
            className={`relative 2xl:w-[600px] 2xl:h-[665px] xl:w-[500px] xl:h-[550px] lg:w-[400px] lg:h-[550px] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]`}
          >
            {favoriteID === artist.id ? (
              <MdFavorite
                className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(16,28,53,0.53)] rounded-lg backdrop-blur-sm text-bgLinearFirst cursor-pointer transition "
                onClick={() => handleFavorite(artist)}
              />
            ) : (
              <MdFavoriteBorder
                className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(16,28,53,0.53)] rounded-lg backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition "
                onClick={() => handleFavorite(artist)}
              />
            )}

            <img
              className="w-[100%] h-[100%] rounded-[30px] object-cover object-left-top "
              src={`${artist?.images[0].url}`}
              alt=""
            />
          </div>
          <div className="flex flex-1 w-full flex-col justify-center 2xl:gap-8 gap-5">
            <h1 className="2xl:text-[2.5em] xl:text-[2em] lg:text-[1.7em] text-activeColor font-bold">
              {artist?.name}
            </h1>
            <div className="flex flex-col flex-wrap gap-5 text-sm lg:w-[600px]">
              <div className="flex gap-3">
                {artist?.genres.map((genre, i) => (
                  <div
                    key={i}
                    className="2xl:py-3 2xl:px-4 py-2 px-3 bg-bgGradient rounded-[20px] text-activeColor"
                  >
                    {genre}
                  </div>
                ))}
              </div>
              <div>
                <span className="2xl:py-3 2xl:px-4 py-2 px-3 bg-bgGradient rounded-[20px] text-activeColor">
                  <span className="text-bgLinearFirst font-bold">
                    followers :
                  </span>{" "}
                  {artist?.followers.total}
                </span>
                <span className="2xl:py-3 2xl:px-4 py-2 px-3 bg-bgGradient rounded-[20px] text-activeColor">
                  <span className="text-bgLinearFirst font-bold">
                    popularity :
                  </span>{" "}
                  {artist?.popularity} / 100
                </span>
              </div>
            </div>
            <div className="flex flex-col 2xl:w-full 2xl:h-[455px] xl:w-[720px] xl:h-[385px] lg:w-[600px] lg:h-[385px] w-full h-[385px]  p-3 bg-[rgba(255,255,255,.04)] rounded-xl">
              <div className=" overflow-auto  custom-scrollbar">
                {artistTopTracks?.map((track, index) => (
                  <SongCard
                    key={track.id}
                    data={artistTopTracks}
                    track={track}
                    index={index}
                    selectActiveSong={selectActiveSong}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-14">
          <SwiperComp
            data={artistAlbums}
            title="Artist's Albums"
            card="album"
            slidesPerView={6}
          />
          <SwiperComp
            data={artistRelatedArtists}
            title="Artist's Related Artists"
            card="multi"
            slidesPerView={8}
          />
        </div>
      </div>
    );
  }
};

export default Artist;
