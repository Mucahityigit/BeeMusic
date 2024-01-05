import React, { useEffect, useState } from "react";
// import newAlbum from "../assets/album.png";
import { FaPlay } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import apiClient from "../spotify";
import "../App.css";
import Loading from "../components/Loading";

const NewAlbumComp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newAlbum, setNewAlbum] = useState([]);
  const [artist, setArtist] = useState([]);
  const [artistID, setArtistID] = useState();
  const fetchData = async () => {
    try {
      const response = await apiClient.get(`browse/new-releases`);
      setNewAlbum(response.data.albums.items[0]);
      setArtistID(response.data.albums.items[0].artists[0].id);
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (Object.keys(newAlbum).length > 0 && artistID) {
      apiClient.get(`artists/${artistID}`).then((response) => {
        setArtist(response.data);
        setIsLoading(false); // Her iki veri de yüklendiğinde isLoading'i false yap
      });
    }
  }, [newAlbum, artistID]);

  console.log(newAlbum);
  console.log(artist);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="flex gap-5 pt-5 pb-10">
        <div className="relative w-[50%] h-[400px] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <MdFavoriteBorder className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(255,255,255,.2)] rounded-lg backdrop-blur-sm text-activeColor cursor-pointer transition " />
          {/* <MdFavorite className=" absolute top-5 right-5 cursor-pointer transition text-2xl " /> */}
          <img
            className="w-[100%] h-[100%] rounded-[30px] object-cover object-left-top "
            src={newAlbum.images[0].url}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-7">
          <h1 className="text-[2.5em] text-activeColor font-bold">
            {newAlbum?.name}
          </h1>
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
                <div className="text-md text-passiveColor font-bold">
                  Artist
                </div>
                <div className="transition-all ease-in-out duration-300 text-xl text-activeColor font-bold hover:text-bgLinearSecond cursor-pointer">
                  {artist.name}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-3 px-4 bg-bgGradient rounded-[20px]">
              <div className="text-md text-passiveColor font-bold">
                Album Info
              </div>
              <div className="transiton text-xl text-activeColor font-bold">
                {newAlbum.total_tracks} Tracks |{" "}
                {newAlbum.release_date.split("-")[0]}
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <span className="inline-block px-4 bg-bgGradient rounded-[20px] text-activeColor">
              25 min 50 sec
            </span>
          </div>
          <div className="flex gap-5">
            <div className="text-xl font-bold text-bgLinearSecond">
              Rhythm Revulation
            </div>
            <div className="text-xl font-bold text-activeColor">
              {" "}
              2 Weeks ago
            </div>
          </div>
          <div className="flex gap-4">
            <div className="transition-all ease-in-out duration-300 flex gap-3 justify-center items-center bg-bgLinearSecond py-[10px] px-5 rounded-[15px] cursor-pointer group hover:bg-activeColor">
              <FaPlay className="transition text-activeColor text-[26px] group-hover:text-bgColor" />
              <span className="transition text-activeColor text-xl font-bold group-hover:text-bgColor">
                Play
              </span>
            </div>
            <div className="transition-all ease-in-out duration-300 flex gap-3 justify-center items-center text-bgColor font-bold text-lg bg-activeColor cursor-pointer py-[10px] px-5 rounded-[15px] hover:bg-bgLinearSecond hover:text-activeColor">
              Add to playlist
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NewAlbumComp;
