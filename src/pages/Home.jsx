import React from "react";
import SideBar from "../components/SideBar";
import MainArea from "../components/MainArea";
import LastListened from "../components/LastListened";

const Home = () => {
  return (
    <div className="flex flex-1">
      <MainArea />
      <LastListened />
    </div>
  );
};

export default Home;
