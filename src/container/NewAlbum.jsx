import React, { useEffect, useState } from "react";
// import newAlbum from "../assets/album.png";
import { FaPlay } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "../App.css";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getNewReleasesAlbum } from "../redux/albumSlice";
import { getArtistById, setArtistID } from "../redux/artistSlice";
import { formatDate } from "../utils/functions";
import { Link } from "react-router-dom";
import { setFavorite } from "../redux/favoriteSlice";

const NewAlbumComp = () => {
  const dispatch = useDispatch();
  const { newReleasesAlbum } = useSelector((state) => state.album);
  const { artistId, artist } = useSelector((state) => state.artist);
  const { albums } = useSelector((state) => state.favorite);
  const [favoriteID, setFavoriteID] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      dispatch(getNewReleasesAlbum());
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  };
  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };

  useEffect(() => {
    // Eğer favori şarkılar içerisinde track varsa favoriID'yi set et
    const isFavorite = albums.some(
      (album) => album.id === newReleasesAlbum?.id
    );
    setFavoriteID(isFavorite ? newReleasesAlbum.id : null);
  }, [albums]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(newReleasesAlbum).length > 0) {
      const artistId = newReleasesAlbum.artists[0].id;
      dispatch(setArtistID(artistId));
    }
  }, [newReleasesAlbum, dispatch]);

  useEffect(() => {
    if (Object.keys(newReleasesAlbum).length > 0 && artistId) {
      dispatch(getArtistById(artistId));
    }
  }, [newReleasesAlbum, artistId, dispatch]);

  useEffect(() => {
    if (
      Object.keys(newReleasesAlbum).length > 0 &&
      Object.keys(artist).length > 0
    ) {
      setIsLoading(false); // Her iki veri de yüklendiğinde isLoading'i false yap
    }
  }, [newReleasesAlbum, artist]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="flex lg:flex-row flex-col gap-10 pt-5 pb-10">
        <div className="relative lg:w-[60%] w-[100%] h-[400px] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]">
          {newReleasesAlbum.id === favoriteID ? (
            <MdFavorite
              className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(16,28,53,0.53)] rounded-lg backdrop-blur-sm text-bgLinearFirst cursor-pointer transition "
              onClick={() => handleFavorite(newReleasesAlbum)}
            />
          ) : (
            <MdFavoriteBorder
              className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(16,28,53,0.53)] rounded-lg backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition "
              onClick={() => handleFavorite(newReleasesAlbum)}
            />
          )}

          <img
            className="w-[100%] h-[100%] rounded-[30px] object-cover object-left-top "
            src={newReleasesAlbum.images[0].url}
            alt=""
          />
        </div>
        <div className="flex flex-col w-full justify-center items-start gap-7">
          <Link to={`/album/${newReleasesAlbum.id}`}>
            <h1 className="transition-all ease-in-out duration-300 lg:text-[2.5em] text-[2em] text-activeColor font-bold hover:text-bgLinearFirst cursor-pointer">
              {newReleasesAlbum?.name}
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center gap-4 py-3 px-4 bg-bgGradient rounded-[20px]">
              <div className="w-[50px] h-[50px] rounded-full ">
                <img
                  className="w-[100%] h-[100%] rounded-full "
                  src={artist.images[2].url}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="lg:text-md text-sm text-passiveColor font-bold">
                  Artist
                </div>
                <Link
                  to={`/artist/${artist.id}`}
                  className="transition-all ease-in-out duration-300 lg:text-xl text-md text-activeColor font-bold hover:text-bgLinearFirst cursor-pointer"
                >
                  {artist.name}
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center py-3 px-4 bg-bgGradient rounded-[20px]">
              <div className="lg:text-md text-sm text-passiveColor font-bold">
                Album Info
              </div>
              <div className=" lg:text-xl text-md text-activeColor font-bold">
                {newReleasesAlbum.total_tracks} Tracks |{" "}
                {newReleasesAlbum.release_date.split("-")[0]}
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <span className="lg:text-md text-sm inline-block px-4 bg-bgGradient rounded-[20px] text-activeColor">
              25 min 50 sec
            </span>
          </div>
          <div className="flex gap-5">
            <div className="lg:text-xl text-md font-bold text-bgLinearSecond">
              Rhythm Revulation
            </div>
            <div className="lg:text-xl text-md font-bold text-activeColor">
              {" "}
              {formatDate(newReleasesAlbum.release_date)}
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              to={`./album/${newReleasesAlbum.id}`}
              className="transition-all ease-in-out duration-300 flex gap-3 justify-center items-center bg-bgLinearSecond py-[10px] px-5 rounded-[15px] cursor-pointer group hover:bg-activeColor"
            >
              <FaPlay className="transition text-activeColor lg:text-[26px] text-[20px] group-hover:text-bgColor" />
              <span className="transition text-activeColor lg:text-xl text-md font-bold group-hover:text-bgColor">
                Play
              </span>
            </Link>
            <div className="transition-all ease-in-out duration-300 flex gap-3 justify-center items-center text-bgColor font-bold lg:text-xl text-md bg-activeColor cursor-pointer py-[10px] px-5 rounded-[15px] hover:bg-bgLinearSecond hover:text-activeColor">
              Add to playlist
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NewAlbumComp;
