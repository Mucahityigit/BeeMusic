import React from 'react'
import newAlbum from "../assets/album.png";
import { FaPlay } from "react-icons/fa";
import { MdFavorite,MdFavoriteBorder  } from "react-icons/md";

import '../App.css';

const NewAlbumComp = () => {
  return (
    <div className='flex gap-5 py-16'>
        <div className='relative w-[50%] rounded-[30px] shadow-[10px_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <MdFavoriteBorder className=" absolute top-5 right-5 p-1 text-[40px]  bg-[rgba(255,255,255,.2)] rounded-lg backdrop-blur-sm text-activeColor cursor-pointer transition "  />
            {/* <MdFavorite className=" absolute top-5 right-5 cursor-pointer transition text-2xl " /> */}
            <img className='w-[100%] h-[100%] rounded-[30px]' src={newAlbum} alt="" />
        </div>
        <div className='flex flex-col justify-center gap-7'>
            <h1 className='text-[2.5em] text-activeColor font-bold'>Album Title</h1>
            <div className='flex items-center gap-3'>
                <div className='flex justify-center items-center gap-4 py-3 px-4 bg-bgGradient rounded-[20px]'>
                    <div className='w-[50px] h-[50px] rounded-full '>
                        <img className='w-[100%] h-[100%] rounded-full ' src={newAlbum} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-md text-passiveColor font-bold'>Artist</div>
                        <div className='transiton text-xl text-activeColor font-bold hover:text-bgLinearSecond cursor-pointer'>Artist Name</div>
                    </div>
                </div>
                <div  className='flex flex-col justify-center py-3 px-4 bg-bgGradient rounded-[20px]'>
                    <div className='text-md text-passiveColor font-bold'>Album Info</div>
                    <div className='transiton text-xl text-activeColor font-bold'>15 Tracks . 2M+ Likes</div>
                </div>
            </div>
            <div className='flex justify-start'>
                <span className='inline-block px-4 bg-bgGradient rounded-[20px] text-activeColor'>25 min 50 sec</span>
            </div>
            <div className='flex gap-5'>
                <div className='text-xl font-bold text-bgLinearSecond'>Rhythm Revulation</div>
                <div className='text-xl font-bold text-activeColor'> 2 Weeks ago</div>
            </div>
            <div className='flex gap-4'>
                <div className='transition flex gap-3 justify-center items-center bg-bgLinearSecond py-[10px] px-5 rounded-[15px] cursor-pointer group hover:bg-activeColor'>
                    <FaPlay className='transition text-activeColor text-[26px] group-hover:text-bgColor' />
                    <span className='transition text-activeColor text-xl font-bold group-hover:text-bgColor'>Play</span>
                </div>
                <div className='transition flex gap-3 justify-center items-center text-bgColor font-bold text-lg bg-activeColor cursor-pointer py-[10px] px-5 rounded-[15px] hover:bg-bgLinearSecond hover:text-activeColor'>Add to playlist</div>
            </div>
        </div>
    </div>
  )
}

export default NewAlbumComp