import React from "react";
import SideBar from "../container/SideBar";
import { Outlet } from "react-router-dom";
import MusicPlayer from "../MusicPlayer/index";
import PlaylistComp from "../components/PlaylistComp";

const MainLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
      <MusicPlayer />
      <PlaylistComp />
    </div>
  );
};

export default MainLayout;
