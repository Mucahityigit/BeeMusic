import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import "../App.css";
import MultiPurposeCard from "../components/MultiPurposeCard";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteArtists } from "../redux/artistSlice";
import Loading from "../components/Loading";

const FavoriteArtists = () => {
  const dispatch = useDispatch();
  const { favoriteArtists } = useSelector((state) => state.artist);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getFavoriteArtists());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(favoriteArtists).length > 0) {
      setIsLoading(false);
    }
  }, [favoriteArtists]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="2xl:w-[1580px] xl:w-[1250px] lg:w-[1000px]  md:w-[830px] sm:w-[680px] w-full ">
        <div className="flex justify-between items-end py-2 mb-3 border-b border-[rgba(255,255,255,.4)]">
          <div className="text-activeColor lg:text-2xl text-xl font-bold">
            Favorite Artists
          </div>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
            1540: {
              slidesPerView: 8,
              spaceBetween: 40,
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
          {favoriteArtists?.map((artist) => (
            <SwiperSlide
              key={artist.id}
              className="flex justify-center items-center"
            >
              <MultiPurposeCard data={artist} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
};

export default FavoriteArtists;
