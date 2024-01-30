import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../redux/trackSlice";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import {
  getAlbumsByQuery,
  getArtistsByQuery,
  getPlaylistsByQuery,
  getTracksByQuery,
} from "../redux/searchSlice";
import SearchComp from "../components/SearchComp";
const Discover = () => {
  const { genres } = useSelector((state) => state.track);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(genres).length > 0) {
      generateRandomColors();
      setIsLoading(false);
    }
  }, [genres]);

  const handleQuery = (query) => {
    let value;
    if(query){
      value = query
    }else{
      value = ""
    }
    dispatch(getTracksByQuery(value));
    dispatch(getAlbumsByQuery(value));
    dispatch(getArtistsByQuery(value));
    dispatch(getPlaylistsByQuery(value));
  };

  const generateRandomColors = () => {
    const newColors = genres.map(() => getRandomColor());
    setColors(newColors);
  };

  const getRandomColor = () => {
    const randomNumber1 = Math.floor(Math.random() * 210);
    const randomNumber2 = Math.floor(Math.random() * 80);
    const randomNumber3 = Math.floor(Math.random() * 220);
    return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="w-full h-full lg:ml-[14%] ml-0 p-7 bg-bgImage bg-cover pb-[100px]">
        <div className="relative flex flex-col w-full justify-center items-center">
          <div className="relative">
            <IoIosSearch className="absolute top-4 left-4 text-[30px] text-[rgba(255,255,255,.4)]" />
            <input
              className="w-[450px] py-4 pl-14 pr-3 bg-transparent border-2 border-[rgba(255,255,255,.4)] rounded-3xl text-[rgba(255,255,255,.6)] outline-none"
              type="text"
              placeholder="What do you want to listen to?"
              onKeyUp={(e) => handleQuery(e.target.value)}
            />
          </div>
          <div className="w-auto bg-[rgba(255,255,255,.1)] mt-[10px] pt-[15px] rounded-3xl">
            <SearchComp />
          </div>
        </div>
        <div className="text-xl text-activeColor py-2 mb-5 border-b-2 border-[rgba(255,255,255,.4)]">
          Categories
        </div>
        <div className="flex flex-wrap justify-between gap-5 ">
          {genres.map((genre, index) => {
            return (
              <Link
                to={`/category/${genre}`}
                key={index}
                style={{ backgroundColor: colors[index] }}
                className={`flex justify-center items-center uppercase w-48 h-48 rounded-2xl text-activeColor cursor-pointer transition duration-300 ease-in-out hover:scale-110`}
              >
                {" "}
                {genre}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Discover;
