import React from 'react'

const Sandwich = () => {
  return (
    <div className='max-w-[1640px] w-full mb-10 mx-auto rounded-lg  flex shadow-lg gap-5 my-6'>
      <div className='flex flex-col p-4 justify-center items-start '>
        <h1 className='text-2xl p-4 lg:text-5xl font-bold'>Best deals <span className='text-2xl lg:text-5xl text-red-400'>Crispy Sandwiches</span></h1>
        <p className='text-base md:text-xl p-4 lg:text-2xl'>Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</p>
        <button className='ml-4 border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'>Order</button>
      </div>
      <div className='flex w-full'>
        <img className='max-h-[400px] w-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1554433607-66b5efe9d304?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div> 
    </div>
  )
}

export default Sandwich