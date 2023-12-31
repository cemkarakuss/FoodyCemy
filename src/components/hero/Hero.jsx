import React from 'react'


const Hero = () => {
  return (
    <div className='max-w-[1640px] rounded-lg m-auto p-4'>
      <div className='relative max-h[500px] rounded-lg'>
        {/* Overlay */}
         <div className='absolute w-full h-full text-gray-200 max-h-[600px] bg-black/60 flex flex-col justify-center rounded-lg'>
           <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-red-400'>Best</span></h1>
           <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-red-400'>Foods </span>Delivery</h1>
         </div>
         <img src="https://images.unsplash.com/photo-1605210014512-0b56f31359ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full object-cover rounded-lg max-h-[500px]'/>
      </div>
    </div>
  )
}

export default Hero