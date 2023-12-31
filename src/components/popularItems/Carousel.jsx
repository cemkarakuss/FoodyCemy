import React, { useState } from 'react'
import Slider from 'react-slick';
import PopularItemsCard from './PopularItemsCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { imagePopular } from '../../data/data';

const Carousel = () => {
  
  const [imagePop, setImage] = useState(imagePopular)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <h2 className='px-2 text-red-500 text-lg mb-6 md:text-3xl font-bold'>Popular Items</h2>
      <Slider {...settings}>
          {
            imagePop.map((popularData, index) => {
              return <div className='px-2 rounded-lg'>
                <PopularItemsCard key={index} popularData={popularData}/>
              </div>
            })
          }
          
          
      </Slider>   
    </div>
  )
}

export default Carousel