import React, { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const SongInfo = ({ isPlaying, activeSong }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (Object.keys(activeSong).length > 0) {
      setIsLoading(true);
    }
  }, [activeSong]);

  if (!isLoading) {
    <Loading />;
  } else {
    return (
      <div className="flex flex-1 items-center gap-5 p-2">
        <div className="w-[70px] h-[70px] rounded-xl overflow-hidden">
          <img
            className="w-[100%] h-[100%]"
            src={`${activeSong?.album ? activeSong?.album.images[2].url : ""}`}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-activeColor">{activeSong?.name}</div>
          <div className="text-sm text-passiveColor">
            {activeSong?.artists.map((artist, index) => (
              <Link
                to={`/artist/${artist.id}`}
                className=" hover:text-bgLinearFirst cursor-pointer"
                key={index}
              >
                {artist.name}
                {index !== activeSong.artists.length - 1 && " , "}
              </Link>
            ))}
            {/* {activeSong?.artists[0].name} */}
          </div>
        </div>
        <div className="text-activeColor">
          <MdFavoriteBorder className=" p-1 text-[30px] text-activeColor cursor-pointer" />
          {/* <MdFavorite className=" absolute top-5 right-5 cursor-pointer transition text-2xl " /> */}
        </div>
      </div>
    );
  }
};

export default SongInfo;
