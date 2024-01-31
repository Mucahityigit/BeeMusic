import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {
  getArtistTopTracks,
  getRecommendedTracksById,
  getTrackById,
} from "../redux/trackSlice";
import SongCard from "../components/SongCard";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
import Loading from "../components/Loading";
import SwiperComp from "../components/SwiperComp";
import { setFavorite } from "../redux/favoriteSlice";
import { FaPause, FaPlay } from "react-icons/fa";
import { getArtistAlbums } from "../redux/albumSlice";
import { getArtistRelatedArtists } from "../redux/artistSlice";
const Song = () => {
  const { songID } = useParams();
  const dispatch = useDispatch();
  const { track, recommendedTracks, artistTopTracks } = useSelector(
    (state) => state.track
  );
  const { artistAlbums } = useSelector((state) => state.album);
  const { artistRelatedArtists } = useSelector((state) => state.artist);
  const { isPlaying } = useSelector((state) => state.player);
  const [isLoading, setIsLoading] = useState(true);
  const { songs } = useSelector((state) => state.favorite);
  const [favoriteID, setFavoriteID] = useState();
  const [artistID, setArtistID] = useState();

  useEffect(() => {
    // Eğer favori şarkılar içerisinde track varsa favoriID'yi set et
    const isFavorite = songs.some((song) => song.id === track?.id);
    setFavoriteID(isFavorite ? track.id : null);
  }, [songs, track]);

  const selectActiveSong = (data, track, index, value) => {
    dispatch(setActiveSong({ data, track, index }));
    dispatch(setIsPlaying(value));
  };
  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };

  useEffect(() => {
    dispatch(getTrackById(songID));
    dispatch(getRecommendedTracksById(songID));
    dispatch(getArtistTopTracks(artistID));
    dispatch(getArtistAlbums(artistID));
    dispatch(getArtistRelatedArtists(artistID));
  }, [songID, artistID, dispatch]);

  useEffect(() => {
    if (Object.keys(track).length > 0) {
      setArtistID(track?.artists[0].id);
    }
  }, [track]);

  useEffect(() => {
    if (
      Object.keys(recommendedTracks).length > 0 &&
      Object.keys(artistAlbums).length > 0 &&
      Object.keys(artistRelatedArtists).length > 0 &&
      Object.keys(artistTopTracks).length > 0
    ) {
      setIsLoading(false);
    }
  }, [recommendedTracks, artistRelatedArtists, artistAlbums, artistTopTracks]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="w-full h-full lg:ml-[14%] p-7 bg-bgImage bg-cover pb-[100px]">
        <div className="flex lg:flex-row flex-col gap-10 pt-5 pb-10">
          <div className="relative lg:w-[30%] sm:w-[80%] sx:[100%] h-[350px] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]">
            {track.id === favoriteID ? (
              <MdFavorite
                className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(16,28,53,0.53)] rounded-lg backdrop-blur-sm text-bgLinearFirst cursor-pointer transition "
                onClick={() => handleFavorite(track)}
              />
            ) : (
              <MdFavoriteBorder
                className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(16,28,53,0.53)] rounded-lg backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition "
                onClick={() => handleFavorite(track)}
              />
            )}

            <img
              className="w-[100%] h-[100%] rounded-[30px] object-cover object-left-top "
              src={track?.album.images[0].url}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-end gap-7">
            {isPlaying ? (
              <FaPause
                className="transition-all ease-in-out duration-300 text-activeColor lg:text-[36px] sm:text-[30px]  hover:text-bgLinearFirst hover:border-bgLinearFirst w-[60px] h-[60px] p-[14px] border rounded-2xl cursor-pointer"
                onClick={() => dispatch(setIsPlaying(false))}
              />
            ) : (
              <FaPlay
                className="transition-all ease-in-out duration-300 text-activeColor hover:text-bgLinearFirst hover:border-bgLinearFirst lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] p-[14px] border rounded-2xl cursor-pointer"
                onClick={() => selectActiveSong(track, track, 0, true)}
              />
            )}
            <h1 className="transition-all ease-in-out duration-300 lg:text-[2.5em] sm:text-[2em] text-[1.5em] text-activeColor font-bold hover:text-bgLinearFirst cursor-pointer">
              {track?.name}
            </h1>
            <div className="flex md:flex-row flex-col  md:items-center items-start gap-3">
              <div className="flex justify-center items-center gap-4 py-3 px-4 bg-bgGradient rounded-[20px]">
                <div className="flex flex-col">
                  <div className="sm:text-md text-sm text-passiveColor font-bold">
                    Artist
                  </div>
                  <Link
                    to={`/artist/${track?.artists[0].id}`}
                    className="transition-all ease-in-out duration-300 sm:text-xl text-md text-activeColor font-bold hover:text-bgLinearFirst cursor-pointer"
                  >
                    {track?.artists[0].name}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center py-3 px-4 bg-bgGradient rounded-[20px]">
                <div className="sm:text-md text-sm text-passiveColor font-bold">
                  Album Name:
                </div>
                <Link
                  to={`/album/${track?.album.id}`}
                  className="transition-all ease-in-out duration-300 sm:text-xl text-md text-activeColor font-bold hover:text-bgLinearFirst cursor-pointer"
                >
                  {track?.album.name}
                </Link>
              </div>
              <div className="flex flex-col justify-center py-3 px-4 bg-bgGradient rounded-[20px]">
                <div className="sm:text-md text-sm text-passiveColor font-bold">
                  Album Info
                </div>
                <div className="transiton sm:text-xl text-sm text-activeColor font-bold">
                  {track?.album.total_tracks} Tracks |{" "}
                  {track?.album.release_date.split("-")[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-activeColor text-2xl font-bold my-5">
          Popular Tracks by {track?.artists[0].name}
        </div>
        <div className="flex flex-col w-full h-[380px] p-3 bg-[rgba(255,255,255,.08)] rounded-xl">
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

        <div className="text-activeColor text-2xl font-bold my-5">
          Recommended based on this song
        </div>
        <div className="flex flex-col w-full h-[380px] p-3 bg-[rgba(255,255,255,.08)] rounded-xl">
          <div className=" overflow-auto  custom-scrollbar">
            {recommendedTracks?.map((track, index) => (
              <SongCard
                key={track.id}
                data={recommendedTracks}
                track={track}
                index={index}
                selectActiveSong={selectActiveSong}
              />
            ))}
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

export default Song;
