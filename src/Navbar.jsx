import React from 'react'
import { PiCurrencyBtcFill } from "react-icons/pi";

export default function Navbar() {
  return (
    <div>
        <div className='md:flex flex-rows text-xl font-bold justify-between'>
        <div className='flex'>
            <PiCurrencyBtcFill className='text-4xl'/>
            <p className='font-bold text-2xl'>bro<span className='font-bold text-blue-300'>Bank</span></p>
        </div>
        <div className='flex gap-10'>
            <a className='nav' href=''>Home</a>
            <a className='nav' href=''>Features</a> 
            <a className='nav' href=''>Products</a>
            <a className='nav' href=''>Clients</a>
        </div>
        </div>
    </div>
  )
}
