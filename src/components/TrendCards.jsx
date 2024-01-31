import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecommendedSongCard from "./RecommendedSongCard";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
import { useDispatch } from "react-redux";

const TrendCards = ({ data, title }) => {
  const dispatch = useDispatch();

  const selectActiveSong = (data, track, index, value) => {
    dispatch(setActiveSong({ data, track, index }));
    dispatch(setIsPlaying(value));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex py-2  border-b border-[rgba(255,255,255,.4)]">
        <div className="text-activeColor lg:text-3xl text-lg font-bold">
          {title}
        </div>
      </div>
      <div className="2xl:w-[1100px] xl:w-[750px] lg:w-[500px] md:w-[768px] sm:w-[680px] xs:w-full ">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1540: {
              slidesPerView: 4,
              spaceBetween: 20,
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
          {data?.map((track, index) => (
            <SwiperSlide
              key={track.id}
              className="flex  justify-center items-center"
            >
              <RecommendedSongCard
                data={data}
                track={track}
                selectActiveSong={selectActiveSong}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendCards;
