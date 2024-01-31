import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTrackByCategory } from "../redux/trackSlice";
import Loading from "../components/Loading";
import RecommendedSongCard from "../components/RecommendedSongCard";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
const Category = () => {
  const { genre } = useParams();
  const { categoryTracks } = useSelector((state) => state.track);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const selectActiveSong = (data, track, index, value) => {
    dispatch(setActiveSong({ data, track, index }));
    dispatch(setIsPlaying(value));
  };

  useEffect(() => {
    dispatch(getTrackByCategory(genre));
  }, [dispatch, genre]);

  useEffect(() => {
    if (Object.keys(categoryTracks).length > 0) {
      setIsLoading(false);
    }
  }, [categoryTracks]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="w-full min-h-[100vh] lg:ml-[14%] ml-0 p-7 bg-bgImage bg-cover pb-[100px]">
        <div className="text-xl text-activeColor py-2 mb-5 border-b-2 border-[rgba(255,255,255,.4)]">
          Songs in <span className="text-bgLinearFirst font-bold">{genre}</span>{" "}
          category
        </div>
        <div className="flex flex-wrap  gap-8  sm:justify-between justify-center">
          {Object.keys(categoryTracks).length > 0 ? (
            categoryTracks?.map((track, index) => (
              <div key={track.id}>
                <RecommendedSongCard
                  data={categoryTracks}
                  track={track}
                  selectActiveSong={selectActiveSong}
                  index={index}
                ></RecommendedSongCard>
              </div>
            ))
          ) : (
            <div className="text-3xl text-activeColor">
              There are no songs in this category
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Category;
