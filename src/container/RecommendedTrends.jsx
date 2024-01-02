import React from "react";
import RecommendedSongCard from "../components/RecommendedSongCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const RecommendedTrends = () => {
  const count = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7,
    8, 9,
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-end py-2  border-b border-[rgba(255,255,255,.4)]">
        <div className="text-activeColor text-3xl font-bold">
          Weekly Trending
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
          {count.map((movie, i) => (
            <SwiperSlide key={i}>
              <RecommendedSongCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-between items-end py-2  border-b border-[rgba(255,255,255,.4)]">
        <div className="text-activeColor text-3xl font-bold">
          Monthly Trending
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
          {count.map((movie, i) => (
            <SwiperSlide key={i}>
              <RecommendedSongCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedTrends;
