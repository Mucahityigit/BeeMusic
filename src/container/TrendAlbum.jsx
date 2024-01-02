import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import newAlbum from "../assets/album.png";
import { FaPlay } from "react-icons/fa";
import SongCard from "../components/SongCard";
import "../App.css";
const TrendAlbum = () => {
  return (
    <div className="flex flex-col bg-bgColor pt-3 pb-7 pl-7 pr-4 rounded-[30px]">
      <div className="flex gap-7 pt-5 pb-10">
        <div className="relative w-[200px] h-[220px] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <MdFavoriteBorder className=" absolute top-4 right-4 p-1 text-[36px]  bg-[rgba(255,255,255,.2)] rounded-md backdrop-blur-sm text-activeColor cursor-pointer transition " />
          {/* <MdFavorite className=" absolute top-5 right-5 cursor-pointer transition text-2xl " /> */}
          <img
            className="w-[100%] h-[100%] rounded-[20px]"
            src={newAlbum}
            alt=""
          />
        </div>
        <div className="flex flex-col w-[205px] justify-between gap-5">
          <div className="flex flex-col">
            <h1 className="text-[1.2em] text-activeColor font-bold">
              Album Title
            </h1>
            <div className="text-md font-bold text-bgLinearSecond">
              Rhythm Revulation
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-md font-bold text-activeColor">
              {" "}
              2 Weeks ago
            </div>
            <div className="transiton text-md text-activeColor font-bold">
              15 Tracks . 2M+ Likes
            </div>
          </div>
          <div className="flex gap-4">
            <div className="transition-all ease-in-out duration-500 flex gap-3 justify-center items-center bg-bgLinearSecond py-[8px] px-4 rounded-[15px] cursor-pointer group hover:bg-activeColor">
              <FaPlay className="transition text-activeColor text-[20px] group-hover:text-bgColor" />
              <span className="transition text-activeColor text-md font-bold group-hover:text-bgColor">
                Play
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-h-[430px] overflow-y-scroll  custom-scrollbar">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    </div>
  );
};

export default TrendAlbum;
