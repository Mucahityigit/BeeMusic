import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MultiPurposeCard from "./MultiPurposeCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AlbumCard from "./AlbumCard";
import { Link } from "react-router-dom";

const SwiperComp = ({ data, title, card, slidesPerView }) => {
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
        {data?.map((value) => (
          <SwiperSlide key={value.id}>
            {card == "multi" ? (
              <Link to={`/artist/${value.id}`}>
                <MultiPurposeCard data={value} />
              </Link>
            ) : (
              <Link to={`/album/${value.id}`}>
                <AlbumCard data={value} />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
