import React from 'react'
import img1 from '../src/assets/airbnb.png'
import img2 from '../src/assets/dropbox.png'
import img3 from '../src/assets/coinbase.png'
import img4 from '../src/assets/binance.png'

export default function Logos() {
  return (
    <div className='py-20'>
        <div className='md:flex flex-rows gap-20 justify-center'>
            <img className='w-[150px] h-[50px]' src={img1}/>
            <img className='w-[150px] h-[50px]' src={img4}/>
            <img className='w-[150px] h-[50px]' src={img3}/>
            <img className='w-[150px] h-[50px]' src={img2}/>
        </div>
    </div>
  )
}
