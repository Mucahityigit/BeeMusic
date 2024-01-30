import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PlaylistCard from "../components/PlaylistCard";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritePlaylists } from "../redux/playlistSlice";
import Loading from "../components/Loading";
const FavoritePlayList = () => {
  const dispatch = useDispatch();
  const { favoritePlaylists } = useSelector((state) => state.playlist);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getFavoritePlaylists());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(favoritePlaylists).length > 0) {
      setIsLoading(false);
    }
  }, [favoritePlaylists]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="2xl:w-[1580px]  xl:w-[1250px] lg:w-[1000px]  md:w-[830px] sm:w-[680px]  w-full ">
  <div className="flex justify-between items-end py-2 mb-3 border-b border-[rgba(255,255,255,.4)]">
    <div className="text-activeColor lg:text-2xl text-xl font-bold">
      Favorite Playlists
    </div>
  </div>
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
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1540: {
        slidesPerView: 6,
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
    {favoritePlaylists?.map((playlist) => (
      <SwiperSlide key={playlist.id} className="flex justify-center items-center">
        <PlaylistCard data={playlist} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    );
  }
};

export default FavoritePlayList;
