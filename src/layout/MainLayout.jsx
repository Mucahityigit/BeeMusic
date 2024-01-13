import React from "react";
import SideBar from "../container/SideBar";
import { Outlet } from "react-router-dom";
import MusicPlayer from "../MusicPlayer/Index";

const MainLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
      <MusicPlayer />
    </div>
  );
};

export default MainLayout;
