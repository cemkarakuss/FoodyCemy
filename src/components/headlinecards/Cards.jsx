import React from 'react'



const Cards = ({card}) => {
  return (
    <div className='rounded-xl duration-300 hover:scale-105 relative'>
      <div className='absolute w-full h-full bg-black/60 hover:bg-black/30 duration-300 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>{card.name}</p>
        <p className='px-2 my-2'>{card.durations}</p>
        <button className='hover:bg-red-500/70 duration-300 hover:scale-105 hover:text-white  mx-4 rounded-lg py-2 px-4 border-white bg-white text-black absolute  right-1 bottom-4'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' src={card.image} alt="" />
    </div>
  )
}

export default Cards