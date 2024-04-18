import React from 'react'
import img1 from '../src/assets/robot.png'
import img2 from '../src/assets/Discount.svg'

export default function Container() {
  return (
    <div className='bg mt-20'>
        <div className='flex'>
            <img src={img2} />
            <p className='disc rounded  p-2 '>20% Discount For 1 Month Account</p>
        </div>
        <div className='md:flex flex-rows'>
            <p className='text-8xl font-semibold'>The Next <span className='text-blue-200'>Generation</span> Payment Method.<br/>
            <p className='text-lg mt-4 tracking-wider text-slate-400'>Our team of experts uses a methadology to identify<br/>the credit cards most likely to fit your needs.We<br/> examine annual percentage rates,annual fees.</p></p> 
            <div><p className='border-2 rounded-full text-center py-10 px-10 mt-40 border-teal-200 text-lg text-teal-200	order-2'>Get<span className='text-xl px-2'>↗️</span> Started</p></div>
            <div>
                <img src={img1}/>
            </div>
        </div>
    </div>
  )
}
