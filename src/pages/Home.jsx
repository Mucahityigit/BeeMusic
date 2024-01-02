import React from "react";
import MainArea from "../container/MainArea";
import LastListened from "../container/LastListened";

const Home = () => {
  return (
    <div className="flex flex-1 bg-bgImage bg-cover">
      <MainArea />
      <LastListened />
    </div>
  );
};

export default Home;
