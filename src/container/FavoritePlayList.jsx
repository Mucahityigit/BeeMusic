import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PlaylistCard from "../components/PlaylistCard";
import "../App.css";
const FavoritePlayList = () => {
  const count = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7,
    8, 9,
  ];
  return (
    <div className="lg:w-[1260px] sm:w-[640px] xs:w-[320px]">
      <div className="flex justify-between items-end py-2 mb-3 border-b border-[rgba(255,255,255,.4)]">
        <div className="text-activeColor text-2xl font-bold">
          Favorite Playlist
        </div>
        <div className="text-passiveColor text-sm ">See All</div>
      </div>
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
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {count.map((movie, i) => (
          <SwiperSlide key={i}>
            <PlaylistCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FavoritePlayList;
