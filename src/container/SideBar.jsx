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
const SideBar = () => {
  return (
    <div className="fixed w-[14%] h-[100vh] bg-bgSideGradient p-4">
      <div className="flex items-center cursor-pointer">
        <img src={BeeMusicLogo} alt="logo" className="w-[70px] h-[70px]" />
        <span className="text-[24px] text-passiveColor">BeeMusic</span>
      </div>
      <div className="flex flex-col  gap-3">
        <div className="transition flex gap-3 text-passiveColor items-center  mt-10 cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]">
          <RiHome4Fill className="transition text-2xl group-hover:text-bgLinearFirst" />
          <span className="transition group-hover:text-bgLinearFirst">
            Home
          </span>
        </div>
        <div className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]">
          <RiCompassDiscoverFill className="transition text-2xl group-hover:text-bgLinearFirst" />
          <span className="transition group-hover:text-bgLinearFirst">
            Discover
          </span>
        </div>
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
        <div className="transition flex gap-3 text-passiveColor items-center cursor-pointer  group border-2 border-transparent hover:border-bgLinearFirst py-3 px-5 rounded-[30px]">
          <MdFavorite className="transition text-2xl group-hover:text-bgLinearFirst" />
          <span className="transition group-hover:text-bgLinearFirst">
            Favorite Songs
          </span>
        </div>
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
  );
};

export default SideBar;
