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
    <div className="lg:w-[1600px] sm:w-[640px] xs:w-[320px]">
      <div className="flex justify-between items-end py-2 mb-3 border-b border-[rgba(255,255,255,.4)]">
        <div className="text-activeColor text-2xl font-bold">{title}</div>
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
          1600: {
            slidesPerView: slidesPerView,
            spaceBetween: 30,
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
          <SwiperSlide key={value.id}>
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
