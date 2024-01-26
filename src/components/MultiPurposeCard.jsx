import React, { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { setFavorite } from "../redux/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MultiPurposeCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleFavorite = (data) => {
    dispatch(setFavorite(data));
  };
  const { artists } = useSelector((state) => state.favorite);
  const [favoriteID, setFavoriteID] = useState();

  useEffect(() => {
    // Eğer favori şarkılar içerisinde track varsa favoriID'yi set et
    const isFavorite = artists.some((artist) => artist.id === data?.id);
    setFavoriteID(isFavorite ? data.id : null);
  }, [artists]);

  return (
    <div className="relative w-[150px] h-[200px]  m-[5px] group">
      {favoriteID === data.id ? (
        <MdFavorite
          className=" absolute top-5 right-6 p-1 text-[30px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-bgLinearFirst cursor-pointer transition z-10"
          onClick={() => handleFavorite(data)}
        />
      ) : (
        <MdFavoriteBorder
          className=" absolute top-5 right-6 p-1 text-[30px]  bg-[rgba(16,28,53,0.53)] rounded-md backdrop-blur-sm text-activeColor hover:text-bgLinearFirst cursor-pointer transition z-10"
          onClick={() => handleFavorite(data)}
        />
      )}

      <Link
        to={`/artist/${data.id}`}
        className="transition-all ease-in-out duration-300 flex flex-col justify-between py-3 items-center gap-2 rounded-xl bg-bgCard cursor-pointer group hover:bg-[#28334A]"
      >
        <div className="relative w-[120px] h-[140px]">
          <img
            className="w-[100%] h-[100%] rounded-xl"
            src={data?.images[2].url}
            alt=""
          />
        </div>
        <div className="transition-all ease-in-out duration-300 text-sm text-activeColor group-hover:text-bgLinearFirst ">
          {data?.name}
        </div>
      </Link>
    </div>
  );
};

export default MultiPurposeCard;
