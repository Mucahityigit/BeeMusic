import React from 'react'
import album from "../assets/background1.png";
const ArtistCard = () => {
  return (
    <div className='m-[5px] group'>
        <div className='transition flex flex-col justify-center items-center gap-2 w-[135px] h-[135px] rounded-2xl bg-bgCard cursor-pointer hover:bg-[rgba(255,255,255,0.1)]'>
            <div className='w-[90px] h-[90px]'>
                <img className='w-[100%] h-[100%] rounded-full' src={album} alt="" />
            </div>
            <div className='text-sm text-activeColor '>Pop</div>
        </div>
    </div>
  )
}

export default ArtistCard