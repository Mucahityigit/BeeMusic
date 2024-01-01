import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from "swiper/modules";

import '../App.css'
import AlbumCard from "../components/AlbumCard";

const FavoriteArtists = () => {
  const count = [1,2,3,4,5,6,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9]
  return (
    <div className='lg:w-[1260px] sm:w-[640px] xs:w-[320px]'>
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
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 7,
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
            {count.map((movie,i) => ( 
                <SwiperSlide key={i}>
                 <AlbumCard />
                </SwiperSlide>
              ))}
          </Swiper>
    </div>
  )
}

export default FavoriteArtists