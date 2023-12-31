import React from 'react'

const DisplayFoods = ({item,i}) => {
  return (
    
    <div key={i} className='shadow-lg border hover:scale-105 duration-300 rounded-lg'>
      <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
      <div className='flex justify-between px-2 py-4'>
        <p className='font-bold'>{item.name}</p>
        <p><span className='bg-red-400 text-white p-1 rounded-full'>{item.price}$</span></p>
      </div>
    </div>
    
  )
}

export default DisplayFoods