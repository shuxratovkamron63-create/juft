import React from 'react'
import bigone from '../assets/bigone.png'
import second from '../assets/second.png'
import smoll from '../assets/smoll.png'
import icons from '../assets/icons.png'
const Footer = () => {
  return (
    <div className='mt-30'>
      <div className="flex justify-center items-center gap-30">
        <div>
          <img src={bigone} alt=""  className='h-70 w-70 '/>
        </div>
        <div>
          <button className=' mb-10 h-8 w-15 rounded-2xl bg-red-800 text-white'>New</button>
          <h1 className="text-4xl font-bold mb-5">Does Anti-money <br /> Laundering affect <br /> you?</h1>
          <p className="text-xl mb-10">A short, interactive quiz to check if your art <br /> business is affected by 5AMLD regulation.</p>
          <button className=' p-3 border-2 border-b-gray-700  rounded-4xl'>Take the Quiz</button>
        </div>
      </div>
      <div className=" mt-30 mb-20 ml-50 h-100 w-300 bg-[#FAF7F3] flex justify-center items-center gap-30">
        <img src={second} alt="" className='h-70 w-80 ' />
        <div >
          <h1 className=" mb-10 font-bold text-2xl">Art world insight.</h1>
          <p className="font-bold">Receive our newsletter direct to your inbox to follow updates <br /> to legislation and the EU art-market's response.</p>
          <button className=' text-start pl-2 h-10 w-70  mt-10 rounded bg-white'>Your email</button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-200 mb-30">
        <img src={smoll} alt="" className='h-30 w-50 '/>
          <img src={icons} alt="" className='h-20 w-80' />
      </div>
    </div>
  )
}

export default Footer