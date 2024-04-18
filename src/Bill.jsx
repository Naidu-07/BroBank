import React from 'react'
import img1 from '../src/assets/bill.png'
import img2 from '../src/assets/google.svg'
import img3 from '../src/assets/apple.svg'

export default function Bill() {
  return (
    <div className='py-40'>
        <div className='md:flex flex-rows'>
            <div className='h-full w-full object-cover'><img src={img1}/></div>
            <div className='py-20'>
            <p className='text-6xl font-semibold text-slate-200'>Easily control your billing & invoicing
            <p className='para text-lg mt-4 tracking-wider text-slate-400'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p></p>
            <div className='flex gap-4 mt-8'>
            <img src={img2}/>
            <img src={img3}/>
            </div>
            </div>
        </div>
    </div>
  )
}
