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
import { Link } from "react-router-dom";

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
      <div className="lg:w-[1200px] md:w-[700px] sm:w-[480px]  xs:w-[320px]">
        <div className="flex justify-between items-end py-2 mb-3 border-b border-[rgba(255,255,255,.4)]">
          <div className="text-activeColor text-2xl font-bold">
            Favorite Artists
          </div>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
            1600: {
              slidesPerView: 8,
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
          {favoriteArtists?.map((artist) => (
            <SwiperSlide key={artist.id}>
              <Link to={`./artist/${artist.id}`}>
                <MultiPurposeCard data={artist} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
};

export default FavoriteArtists;
