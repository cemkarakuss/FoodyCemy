import React from 'react'
import {IoLocationSharp } from "react-icons/io5";


const PopularItemsCard = ({popularData}) => {


  return (
    <div className='relative group rounded-lg overflow-hidden max-h-[200px]'>
  {/* İçerik */}
  <img src={popularData.image} alt={popularData.name} className='w-full h-full object-cover max-h-[200px] min-h-[200px]' />

  {/* Overlay */}
  <div className='bg-black/90 absolute md:px-4 bottom-0 left-0 right-0 px-1 py-4 flex flex-col items-start opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
    <p className='text-white text-sm font-bold md:text-xl lg:text-2xl'>{popularData.name}</p>
    <div className='flex items-center'>
      <IoLocationSharp size={20} className='text-yellow-500'/>
      <p className='text-white font-bold text-[12px] md:text-xl lg:text-2xl'>{popularData.restaurant}</p>
    </div>
    <p className='text-white max-w-fit text-base md:text-lg my-2 bg-red-400 bottom-0 px-4 py-2 rounded-lg'>$3.99</p>
  </div>
</div>
  )
}

export default PopularItemsCard