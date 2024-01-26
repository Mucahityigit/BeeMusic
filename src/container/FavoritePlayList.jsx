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
      <div className="lg:w-[1600px] md:w-[900px] sm:w-[480px] xs:w-[320px]">
        <div className="flex justify-between items-end py-2 mb-3 border-b border-[rgba(255,255,255,.4)]">
          <div className="text-activeColor text-2xl font-bold">
            Favorite Playlists
          </div>
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
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1600: {
              slidesPerView: 6,
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
          {favoritePlaylists?.map((playlist) => (
            <SwiperSlide key={playlist.id}>
              {/* Bu kısımda değişiklik yaptın . Unutma, Hata varsa burayı kontrol et !!!!!!!!!!!!! */}
              <PlaylistCard data={playlist} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
};

export default FavoritePlayList;
