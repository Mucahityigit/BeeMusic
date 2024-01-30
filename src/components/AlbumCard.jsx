import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../redux/favoriteSlice";
import { Link } from "react-router-dom";

const AlbumCard = ({ data }) => {
  const dispatch = useDispatch();
  const [favoriteID, setFavoriteID] = useState();
  const { albums } = useSelector((state) => state.favorite);

  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };

  useEffect(() => {
    // Eğer favori şarkılar içerisinde track varsa favoriID'yi set et
    const isFavorite = albums.some((album) => album.id === data?.id);
    setFavoriteID(isFavorite ? data.id : null);
  }, [albums]);

  return (
    <div className="relative sm:w-[225px] w-full sm:h-[195px] h-[300px]  m-[5px] group">
      {data.id === favoriteID ? (
        <MdFavorite
          className=" absolute top-5 right-5 p-1 text-[32px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-bgLinearFirst cursor-pointer transition z-10"
          onClick={() => handleFavorite(data)}
        />
      ) : (
        <MdFavoriteBorder
          className=" absolute top-5 right-5 p-1 text-[32px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition z-10"
          onClick={() => handleFavorite(data)}
        />
      )}

      <Link to={`/album/${data.id}`}>
        <div className="transition flex flex-col justify-center items-start px-[10px] gap-2 sm:w-[225px] w-full sm:h-[195px] h-[300px] rounded-xl bg-bgCard cursor-pointer hover:bg-[#28334A]">
          <div className="relative sm:w-[205px] sm:h-[115px] w-[100%] h-[72%]">
            <img
              className="w-[100%] h-[100%] object-cover object-top rounded-xl"
              src={data?.images[0].url}
              alt=""
            />
          </div>
          <div className="text-sm text-activeColor ">
            {data?.name.substr(0, 18) + "..."}
          </div>
          <div className="text-sm text-passiveColor ">
            {data?.total_tracks} Tracks
          </div>
        </div>
        <div className=" absolute flex justify-center items-center p-2 bottom-4 right-4 bg-[rgba(255,255,255,.2)] rounded-full backdrop-blur-sm text-activeColor cursor-pointer transition">
          <FaPlay className=" transition text-[18px] group-hover:text-bgLinearFirst" />
        </div>
      </Link>
    </div>
  );
};

export default AlbumCard;
