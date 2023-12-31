import React from 'react'
import Cards from './Cards'
import { cardData } from '../../data/data'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

      {cardData.map((card,i) => {
        return <Cards card={card}/>
      } )}

      
    </div>
  )
}

export default HeadlineCards