import React from 'react'
import { Womens } from '../data'

const WomanCollections = () => {
  return (
    <>
        <h1 className='p-2 text-3xl'>{Womens.title}</h1>
        <div className='flex gap-2 p-2'>
            <img className='w-80 h-80' src={Womens.image1} alt="image1" />
            <img className='w-80 h-80' src={Womens.image2} alt="image2" />
            <img className='w-80 h-80' src={Womens.image3} alt="image3" />
            <img className='w-80 h-80' src={Womens.image4} alt="image4" />
            <img className='w-80 h-80' src={Womens.image5} alt="image5" />
        </div>

    </>
  )
}

export default WomanCollections