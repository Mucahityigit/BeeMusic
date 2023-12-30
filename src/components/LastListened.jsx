import React from "react";
import LastCard from "./LastCard";
const LastListened = () => {
  return (
    <div className="flex absolute right-0 p-4 bg-bgColor w-[310px] h-[100vh]">
      <div className="flex flex-1 flex-col">
        <h4 className="my-3 text-lg text-passiveColor">Last listened Songs</h4>
        <LastCard />
      </div>
    </div>
  );
};

export default LastListened;
