import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MultiPurposeCard from "./MultiPurposeCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AlbumCard from "./AlbumCard";
import { Link } from "react-router-dom";
import RecommendedSongCard from "./RecommendedSongCard";
import { setActiveSong, setIsPlaying } from "../redux/playerSlice";
import { useDispatch } from "react-redux";
import PlaylistCard from "./PlaylistCard";

const SwiperComp = ({ data, title, card, slidesPerView }) => {
  const dispatch = useDispatch();
  const selectActiveSong = (data, track, index, value) => {
    dispatch(setActiveSong({ data, track, index }));
    dispatch(setIsPlaying(value));
  };
  console.log(data);
  return (
    <div className="2xl:w-[1580px] xl:w-[1250px] lg:w-[1020px]  md:w-[900px] sm:w-[680px] w-full ">
      <div className="flex justify-between items-end py-2 mb-3 border-b border-[rgba(255,255,255,.4)]">
        <div className="text-activeColor text-2xl font-bold">{title}</div>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: slidesPerView-4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: slidesPerView-3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: slidesPerView-2,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: slidesPerView-1,
            spaceBetween: 20,
          },
          1540: {
            slidesPerView: slidesPerView,
            spaceBetween: 40,
          },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {data?.map((value, index) => (
          <SwiperSlide key={value.id} className="flex justify-center items-center">
            {(() => {
              switch (card) {
                case "multi":
                  return <MultiPurposeCard data={value} />;
                case "song":
                  return (
                    <RecommendedSongCard
                      data={data}
                      track={value}
                      selectActiveSong={selectActiveSong}
                      index={index}
                    />
                  );
                case "playlist":
                  return <PlaylistCard data={value} />;
                case "album":
                  return <AlbumCard data={value} />;
                default:
                  return null;
              }
            })()}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
