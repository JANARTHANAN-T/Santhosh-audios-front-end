import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TopNavBtn from '../../components/TopNavBtn/TopNavBtn'
import axios from 'axios'
function GalleryPage() {

  var data=fetch('https://script.google.com/macros/s/AKfycbx8LmqtHUIkf__2hQBkn-3LDZCjbudbymogs4unYAcUmucTmKq1BH1K2yGMOVojaLx-/exec')
    data.then((value)=>{
      console.log(value);
    }).catch((err)=>{
      console.log(err);
    })

  return (
    <div>
    <Navbar floatingNav />
    <div className='pt-24 flex justify-center grid lg:grid-cols-6 md: grid-cols-3  snap-mandatory'>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Car Audios</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Car Accessories</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Home Audios</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Van/Bus Audios</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Van/Bus Lighting</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Other Service</button>
    </div>

    <TopNavBtn />
    </div>
  )
}

export default GalleryPage