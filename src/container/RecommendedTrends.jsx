import React, { useEffect, useState } from "react";
import RecommendedSongCard from "../components/RecommendedSongCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllTimeTopTracks, getMonthlyTopTracks } from "../redux/trackSlice";
import Loading from "../components/Loading";
const RecommendedTrends = () => {
  const dispatch = useDispatch();
  const { allTimeTopTracks, monthlyTopTracks } = useSelector(
    (state) => state.track
  );
  const [isLoading, setIsLoading] = useState(true);

  const count = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7,
    8, 9,
  ];

  useEffect(() => {
    dispatch(getAllTimeTopTracks());
    dispatch(getMonthlyTopTracks());
    console.log(allTimeTopTracks);
    console.log(monthlyTopTracks);
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
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-end py-2  border-b border-[rgba(255,255,255,.4)]">
          <div className="text-activeColor text-3xl font-bold">
            All Time Trending
          </div>
          <div className="text-passiveColor text-sm ">See All</div>
        </div>
        <div className="flex w-[750px]">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {allTimeTopTracks.map((track) => (
              <SwiperSlide key={track.id}>
                <RecommendedSongCard data={track} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-between items-end py-2  border-b border-[rgba(255,255,255,.4)]">
          <div className="text-activeColor text-3xl font-bold">
            Monthly Trending For You
          </div>
          <div className="text-passiveColor text-sm ">See All</div>
        </div>
        <div className="flex w-[750px]">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {monthlyTopTracks.map((track) => (
              <SwiperSlide key={track.id}>
                <RecommendedSongCard data={track} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
};

export default RecommendedTrends;
