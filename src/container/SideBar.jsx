import React from "react";
import BeeMusicLogo from "../assets/BeeMusicLogo.png";
import {
  RiHome4Fill,
  RiCompassDiscoverFill,
  RiPlayList2Line,
} from "react-icons/ri";
import { FaRadio, FaPodcast } from "react-icons/fa6";
import { MdLibraryMusic, MdFavorite } from "react-icons/md";
import { PiMusicNotesPlusFill } from "react-icons/pi";

import "../App.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div>
      <div className="fixed lg:block hidden w-[14%] min-w-[200px] h-[100vh] bg-bgColor p-4">
        <div className="flex items-center cursor-pointer">
          <img src={BeeMusicLogo} alt="logo" className="w-[70px] h-[70px]" />
          <span className="text-[24px] text-passiveColor">BeeMusic</span>
        </div>
        <div className="flex flex-col  gap-3">
          <Link
            to="./"
            className="transition flex gap-3 text-passiveColor items-center  mt-10 cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]"
          >
            <RiHome4Fill className="transition text-2xl group-hover:text-bgLinearFirst" />
            <span className="transition group-hover:text-bgLinearFirst">
              Home
            </span>
          </Link>
          <Link
            to="./discover"
            className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]"
          >
            <RiCompassDiscoverFill className="transition text-2xl group-hover:text-bgLinearFirst" />
            <span className="transition group-hover:text-bgLinearFirst">
              Discover
            </span>
          </Link>
          <div className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]">
            <FaRadio className="transition text-2xl group-hover:text-bgLinearFirst" />
            <span className="transition group-hover:text-bgLinearFirst">
              Radio
            </span>
          </div>
          <div className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]">
            <MdLibraryMusic className="transition text-2xl group-hover:text-bgLinearFirst" />
            <span className="transition group-hover:text-bgLinearFirst">
              Albums
            </span>
          </div>
          <div className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]">
            <FaPodcast className="transition text-2xl group-hover:text-bgLinearFirst" />
            <span className="transition group-hover:text-bgLinearFirst">
              Podcast
            </span>
          </div>
        </div>
        <div className="flex flex-col  gap-3">
          <h4 className="text-sm uppercase px-5 mt-12 text-passiveColor">
            Library
          </h4>
          <div className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]">
            <PiMusicNotesPlusFill className="transition text-2xl group-hover:text-bgLinearFirst" />
            <span className="transition group-hover:text-bgLinearFirst">
              Recently Added
            </span>
          </div>
          <Link
            to="/favorite"
            className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]"
          >
            <MdFavorite className="transition text-2xl group-hover:text-bgLinearFirst" />
            <span className="transition group-hover:text-bgLinearFirst">
              Favorites
            </span>
          </Link>
        </div>
        <div className="flex flex-col  gap-3">
          <h4 className="text-sm uppercase px-5 mt-12 text-passiveColor">
            Playlist
          </h4>
          <div className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]">
            <RiPlayList2Line className="transition text-2xl group-hover:text-bgLinearFirst" />
            <span className="transition group-hover:text-bgLinearFirst">
              Best Summer
            </span>
          </div>
          <div className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]">
            <RiPlayList2Line className="transition text-2xl group-hover:text-bgLinearFirst" />
            <span className="transition group-hover:text-bgLinearFirst">
              Relaxing Music
            </span>
          </div>
        </div>
      </div>
      <div className="fixed lg:hidden block bottom-0 left-0 w-full h-[80px] bg-bgColor p-4 z-40">
        <div className="flex flex-row justify-between items-center gap-3">
          <Link
            to="./"
            className="transition-all ease-in-out duration-300 text-passiveColor items-center cursor-pointer  group hover:bg-[rgba(255,255,255,.1)] hover:rounded-md py-3 px-5 rounded-[30px]"
          >
            <RiHome4Fill className="transition-all ease-in-out duration-300 text-2xl group-hover:text-bgLinearFirst" />
          </Link>
          <Link
            to="./discover"
            className="transition-all ease-in-out duration-300 text-passiveColor items-center cursor-pointer  group hover:bg-[rgba(255,255,255,.1)] hover:rounded-md py-3 px-5 rounded-[30px]"
          >
            <RiCompassDiscoverFill className="transition text-2xl group-hover:text-bgLinearFirst" />
          </Link>
          <Link
            to="/favorite"
            className="transition-all ease-in-out duration-300 text-passiveColor items-center cursor-pointer  group hover:bg-[rgba(255,255,255,.1)] hover:rounded-md py-3 px-5 rounded-[30px]"
          >
            <MdFavorite className="transition text-2xl group-hover:text-bgLinearFirst" />
          </Link>
          <div className="transition-all ease-in-out duration-300 text-passiveColor items-center cursor-pointer  group hover:bg-[rgba(255,255,255,.1)] hover:rounded-md py-3 px-5 rounded-[30px]">
            <MdLibraryMusic className="transition text-2xl group-hover:text-bgLinearFirst" />
          </div>
          <div className="transition-all ease-in-out duration-300 text-passiveColor items-center cursor-pointer  group hover:bg-[rgba(255,255,255,.1)] hover:rounded-md py-3 px-5 rounded-[30px]">
            <FaPodcast className="transition text-2xl group-hover:text-bgLinearFirst" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
