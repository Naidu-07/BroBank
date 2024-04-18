import React from 'react'
import img1 from '../src/assets/quotes.svg'
import img2 from '../src/assets/boy.jpg'
import img3 from '../src/assets/bitmojiboy3.jpg'
import img4 from '../src/assets/girl2.jpg'


export default function Boxes() {
  return (
    <div>
        <div className='md:flex flex-rows gap-30'>
        <div className='hover p-12 rounded-lg border-hidden'>
            <img src={img1} className='py-[-10]'/>
            <p className='font-medium leading-8 text-base font-sans'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
            <div className='flex gap-4 py-6'>
                <img src={img2} className='rounded-full h-[50px] w-[50px] object-cover'/>
                <p className='font-medium leading-8 text-base font-sans'>Monkey D.Luffy <br/>Founder & Leader</p>
            </div>
        </div>
        <div className='hover p-12 rounded-lg border-hidden'>
            <img src={img1}/>
            <p className='font-medium leading-8 text-base font-sans'>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
            <div className='flex gap-4 py-6'>
                <img src={img4} className='rounded-full h-[50px] w-[50px] object-cover'/>
                <p className='font-medium leading-8 text-base font-sans'>Hinata<br/>Founder & Leader</p>
            </div>
        </div>
        <div className='hover p-12 rounded-lg border-hidden'>
            <img src={img1}/>
            <p className='font-medium leading-8 text-base font-sans'> It is usually people in the money business, finance, and in trade that are really rich.</p>
            <div className='flex gap-4 py-6'>
                <img src={img3} className='rounded-full h-[50px] w-[50px] object-cover'/>
                <p className='font-medium leading-8 text-base font-sans'>Mahendra Singh Dhoni <br/> Founder & Captain.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
