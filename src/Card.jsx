import React from 'react'
import img1 from '../src/assets/card.png'

export default function Card() {
  return (
    <div className='py-30'>
        <div className='md:flex flex-rows gap-8'>
            <div className='h-full w-[50%] object-cover order-2 '><img src={img1}/></div>
            <div className='py-20'>
            <p className='text-6xl font-semibold text-slate-200'>Find a better card<br/> deal in few easy steps.
            <p className='para text-lg mt-4 tracking-wider text-slate-400'>Arcu tortor, purus in mattis at sed integer faucibus.<br/> Aliquet quis aliquet eget mauris tortor.ç Aliquet<br/> ultrices ac, ametau.</p></p>
            <button className='btn p-4 rounded-lg px-8 mt-5 text-black font-bold text-xl '>Get Started</button>
            </div>
        </div>
    </div>
  )
}
