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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllTimeTopTracks());
        await dispatch(getMonthlyTopTracks());
      } catch (error) {
        if (error.response && error.response.status === 429) {
          // Handle 429 error
          setError("API limit exceeded. Please try again later.");
        } else {
          // Handle other errors
          setError("An error occurred while fetching data.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <div className="flex w-full flex-col gap-5">{error}</div>;
  } else {
    return (
      <div className="flex w-full flex-col gap-5">
        <TrendCards data={allTimeTopTracks} title="All Time Trending" />
        <TrendCards data={monthlyTopTracks} title="Monthly Trending For You" />
      </div>
    );
  }
};

export default RecommendedTrends;
