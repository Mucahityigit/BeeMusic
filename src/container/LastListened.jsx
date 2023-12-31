import React from "react";
import LastCard from "../components/LastCard";
import AlbumCard from "../components/AlbumCard";
const LastListened = () => {
  return (
    <div className="fixed flex flex-col right-0 p-4 bg-bgColor w-[17%] h-[100vh]">
      <div className="flex flex-1 flex-col">
        <h4 className="my-3 text-lg text-passiveColor">Last listened Songs</h4>
        <LastCard />
        <LastCard />
        <LastCard />
      </div>
      <div className="flex flex-1 flex-col">
        <h4 className="my-3 text-lg text-passiveColor">Last listened Albums</h4>
        <div className="flex flex-wrap">
          <AlbumCard />
          <AlbumCard />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <h4 className="my-3 text-lg text-passiveColor">Last listened Albums</h4>
        <div className="flex flex-wrap">
          <AlbumCard />
          <AlbumCard />
        </div>
      </div>


    </div>
  );
};

export default LastListened;
