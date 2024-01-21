import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const { songs } = useSelector((state) => state.favorite);

  useEffect(() => {
    console.log(songs);
  }, [songs]);
  return <div>Favorite</div>;
};

export default Favorite;
