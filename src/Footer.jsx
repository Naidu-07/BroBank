import React from 'react'
import { FaInstagram, FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { PiCurrencyBtcFill } from "react-icons/pi";


export default function Footer() {
  return (
    <div className='py-20 '>
        <div className='md:flex flex-rows gap-20 gap-40'>
        <div className='flex'>
            <PiCurrencyBtcFill className='text-4xl'/>
            <p className='font-bold text-2xl'>bro<span className='font-bold text-blue-300'>Bank</span>
            <p className='para text-lg mt-4 tracking-wider text-slate-400'>A new way to make the payments <br/>easy, reliable and secure.</p></p>
        </div>
        <div>
            <p className='font-bold text-2xl'>Useful Links</p>
            <p className='tracking-wider text-slate-400 p-1'>Content</p>
            <p className='tracking-wider text-slate-400 p-1'>How it works</p>
            <p className='tracking-wider text-slate-400 p-1'>Create</p>
            <p className='tracking-wider text-slate-400 p-1'>Explore</p>
            <p className='tracking-wider text-slate-400 p-1'>Terms and Services</p>
        </div>
        <div>
            <p className='font-bold text-2xl'>Community</p>
            <p className='tracking-wider text-slate-400 p-1'>Help Center</p>
            <p className='tracking-wider text-slate-400 p-1'>Partners</p>
            <p className='tracking-wider text-slate-400 p-1'>Suggestions</p>
            <p className='tracking-wider text-slate-400 p-1'>Blog</p>
            <p className='tracking-wider text-slate-400 p-1'>Newsletters</p>
        </div>
        <div>
            <p className='font-bold text-2xl'>Partner</p>
            <p className='tracking-wider text-slate-400 p-1'>Our Partner</p>
            <p className='tracking-wider text-slate-400 p-1'>Become a Partner</p>
        </div>
        </div>
        <p className='border-b-2 border-slate-50 mt-20'></p>
        <div className='flex justify-between py-10'>
                <div>
                    <p>Copyright Ⓒ 2022 broBank. All Rights Reserved.</p>
                </div>
                <div className='flex gap-6 text-2xl'>
                <   FaInstagram />
                    <FaFacebookSquare />
                    <FaTwitter />
                    <FaLinkedin />
                </div>        
        </div>
    </div>
  )
}
