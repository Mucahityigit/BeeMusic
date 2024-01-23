import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTimeTopTracks, getMonthlyTopTracks } from "../redux/trackSlice";
import Loading from "../components/Loading";
import TrendCards from "../components/TrendCards";
const RecommendedTrends = () => {
  const dispatch = useDispatch();
  const { allTimeTopTracks, monthlyTopTracks } = useSelector(
    (state) => state.track
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllTimeTopTracks());
    dispatch(getMonthlyTopTracks());
  }, [dispatch]);

  useEffect(() => {
    if (
      Object.keys(allTimeTopTracks).length > 0 &&
      Object.keys(monthlyTopTracks).length > 0
    ) {
      setIsLoading(false);
    }
  }, [allTimeTopTracks, monthlyTopTracks]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-1 flex-col gap-5">
        <TrendCards data={allTimeTopTracks} title="All Time Trending" />
        <TrendCards data={monthlyTopTracks} title="Monthly Trending For You" />
      </div>
    );
  }
};

export default RecommendedTrends;
