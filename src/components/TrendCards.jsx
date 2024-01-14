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
        <div className="text-activeColor text-3xl font-bold">{title}</div>
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
          {data?.map((track, index) => (
            <SwiperSlide key={track.id}>
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
