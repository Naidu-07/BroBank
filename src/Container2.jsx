import React from 'react'

export default function Container2() {
  return (
    <div className='box rounded-xl border-none p-10 mt-20'>
        <div className='md:flex flex-rows gap-60'>
            <div>
                <p className='text-6xl font-semibold text-slate-200'>Let’s try our service now!
                <p className='para text-lg mt-6 tracking-wider text-slate-400'>Everything you need to accept card payments and<br/> grow your business anywhere on the planet.</p></p>
            </div>
            <div>
            <button className='btn p-4 rounded-lg px-8 mt-5 text-black font-bold text-xl '>Get Started</button>
            </div>
        </div>
    </div>
  )
}
