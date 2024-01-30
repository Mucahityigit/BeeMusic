import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const SearchComp = () => {
  const { artistResults, albumResults, trackResults, playlistResults } =
    useSelector((state) => state.search);
    const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    if(Object.keys(artistResults).length > 0 ||Object.keys(albumResults).length > 0 ||Object.keys(trackResults).length > 0 ||Object.keys(playlistResults).length > 0 ){
      setIsLoading(false)
    }
    console.log(playlistResults)
  },[playlistResults,artistResults,albumResults,trackResults])


  if(isLoading){
    <Loading/>
  }else{
  return (
    <div className="w-full px-5 ">
      {Object.keys(artistResults).length > 0 && (

<div className="flex flex-col gap-3">
        <div className="text-xl text-activeColor border-b-[1px]  pb-1 border-[rgba(255,255,255,.2)]">
          Artists
        </div>
        <div className="flex justify-between">
          {artistResults?.map((artist) => (
            <div
              key={artist.id}
              className="flex flex-1 items-center gap-3 p-4 text-lg text-activeColor transition-all ease-in-out duration-300 hover:bg-[rgba(255,255,255,.3)] rounded-md"
            >
              <div className="w-[60px] h-[60px] rounded-lg ">
                <img
                  src={artist.images[2].url}
                  className="w-[100%] h-[100%] rounded-lg "
                  alt=""
                />
              </div>
              <div>{artist.name}</div>
            </div>
          ))}
        </div>
      </div>
      )}
      {Object.keys(trackResults).length > 0 && (
        <div className="flex flex-col gap-3">
        <div className="text-xl text-activeColor border-b-[1px]  pb-1 border-[rgba(255,255,255,.2)]">
          Tracks
        </div>
        <div className="flex justify-between">
          {trackResults?.map((track) => (
            <div
              key={track.id}
              className="flex flex-1 items-center gap-3 p-4 text-lg text-activeColor transition-all ease-in-out duration-300 hover:bg-[rgba(255,255,255,.3)] rounded-md"
            >
              <div className="w-[60px] h-[60px] rounded-lg ">
                <img
                  src={track.album.images[2].url}
                  className="w-[100%] h-[100%] rounded-lg "
                  alt=""
                />
              </div>
              <div>{track.name.substr(0, 20)}</div>
            </div>
          ))}
        </div>
      </div>
      )}
      {Object.keys(albumResults).length > 0 && (
        <div className="flex flex-col gap-3">
        <div className="text-xl text-activeColor border-b-[1px]  pb-1 border-[rgba(255,255,255,.2)]">
          Albums
        </div>
        <div className="flex justify-between">
          {albumResults?.map((album) => (
            <div
              key={album.id}
              className="flex flex-1 items-center gap-3 p-4 text-lg text-activeColor transition-all ease-in-out duration-300 hover:bg-[rgba(255,255,255,.3)] rounded-md"
            >
              <div className="w-[60px] h-[60px] rounded-lg ">
                <img
                  src={album.images[2].url}
                  className="w-[100%] h-[100%] rounded-lg "
                  alt=""
                />
              </div>
              <div>{album.name.substr(0, 20)}</div>
            </div>
          ))}
        </div>
      </div>
      )}
            {Object.keys(albumResults).length > 0 && (
              <div className="flex flex-col gap-3">
        <div className="text-xl text-activeColor border-b-[1px]  pb-1 border-[rgba(255,255,255,.2)]">
          Playlists
        </div>
        <div className="flex justify-between">
          {playlistResults?.map((playlist) => (
            <div
              key={playlist.id}
              className="flex flex-1 items-center gap-3 p-4 text-lg text-activeColor transition-all ease-in-out duration-300 hover:bg-[rgba(255,255,255,.3)] rounded-md"
            >
              <div className="w-[60px] h-[60px] rounded-lg ">
                <img
                  src={playlist.images[0].url}
                  className="w-[100%] h-[100%] rounded-lg "
                  alt=""
                />
              </div>
              <div>{playlist.name.substr(0, 20)}</div>
            </div>
          ))}
        </div>
      </div>
            )}

      
    </div>
  );
          }
};

export default SearchComp;
