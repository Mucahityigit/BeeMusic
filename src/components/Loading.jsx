import React from "react";
import loading from "../assets/Animation - 1704481974821.gif";
const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-[rgba(16,28,53,.97)] z-20">
      <div className="w-[200px] h-[200px]">
        <img className="w-[100%] h-[100%]" src={loading} alt="" />
      </div>
    </div>
  );
};

export default Loading;
