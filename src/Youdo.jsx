import React from 'react'
import img1 from '../src/assets/Star.svg'
import img2 from '../src/assets/Shield.svg'
import img3 from '../src/assets/Send.svg'

export default function Youdo() {
  return (
    <div className='mt-40'>
        <div className='md:flex flex-rows gap-4'>
        <div>
            <p className='text-6xl font-semibold text-slate-200'>You do the business,<br/>we’ll handle the money.<br/>
            <p className='para text-lg mt-4 tracking-wider text-slate-400'>With the right credit card, you can improve your<br/> financial life by building credit, earning rewards and<br/> saving money. But with hundreds of credit cards on<br/> the market.</p></p>
            <button className='btn p-4 rounded-lg px-8 mt-5 text-black font-bold text-xl '>Get Started</button>
        </div>
        <div>
            <div className='hover flex gap-6 p-6 rounded-xl'>
                <img src={img1}/>
                <p className=''><span className='text-lg font-bold '>Rewards</span><br/>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            </div>
            <div className='hover flex gap-6 p-6 rounded-xl'>
                <img src={img2}/>
                <p><span className='text-lg font-bold'>100% Secured</span><br/>We take proactive steps make sure your information and transactions are secure.</p>
            </div>
            <div className='hover flex gap-6 p-6 rounded-xl'>
                <img src={img3}/>
                <p><span className='text-lg font-bold'>Balance Transfer</span><br/>A balance transfer credit card can save you a lot of money in interest charges.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
