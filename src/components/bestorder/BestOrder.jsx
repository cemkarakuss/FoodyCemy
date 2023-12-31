import React from 'react'

const BestOrder = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center md:min-h-[400px] bg-red-100/80 py-12 mx-auto relative text-white'>
      <h1 className='text-center text-red-600 text-4xl font-bold p-4'>Are you ready to order
        with the best deals?
      </h1>
      <div className='w-full flex justify-center'>
      <button className='ml-4 border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'>Proceed to Order</button>
      </div>
      
    </div>
  )
}

export default BestOrder