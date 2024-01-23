import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistById, getArtistRelatedArtists } from "../redux/artistSlice";
import { FaPlay } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
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

  console.log(artistRelatedArtists);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="w-full h-full ml-[14%] p-7 bg-bgImage bg-cover pb-[100px]">
        <div className="flex gap-10 pt-5 pb-10">
          <div
            className={`relative w-[600px] h-[630px] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]`}
          >
            <MdFavoriteBorder
              className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(16,28,53,0.53)] rounded-lg backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition "
              onClick={() => handleFavorite(artist)}
            />
            {/* <MdFavorite className=" absolute top-5 right-5 cursor-pointer transition text-2xl " /> */}
            <img
              className="w-[100%] h-[100%] rounded-[30px] object-cover object-left-top "
              src={`${artist?.images[0].url}`}
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-8">
            <h1 className="text-[2.5em] text-activeColor font-bold">
              {artist?.name}
            </h1>
            <div className="flex items-center gap-3">
              {artist?.genres.map((genre, i) => (
                <div
                  key={i}
                  className="py-3 px-4 bg-bgGradient rounded-[20px] text-activeColor"
                >
                  {genre}
                </div>
              ))}
              <span className="py-3 px-4 bg-bgGradient rounded-[20px] text-activeColor">
                <span className="text-bgLinearFirst font-bold">
                  followers :
                </span>{" "}
                {artist?.followers.total}
              </span>
              <span className="py-3 px-4 bg-bgGradient rounded-[20px] text-activeColor">
                <span className="text-bgLinearFirst font-bold">
                  popularity :
                </span>{" "}
                {artist?.popularity} / 100
              </span>
            </div>
            <div className="flex flex-col w-full h-[455px] p-3 bg-[rgba(255,255,255,.04)] rounded-xl">
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
        <div className="flex flex-col gap-14">
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
