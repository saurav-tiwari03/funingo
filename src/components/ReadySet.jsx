import React from 'react'

export default function ReadySet() {
  return (
    <div className='bg-[#416233] '>
      <p className='py-2 text-center text-5xl text-[#62d816] font-bold ' id='text-border'>Ready, Set, Splatter</p>
      <div className='text-white text-center text-xl font-semibold'>
      "Book your Paintball Battlefield at <br/>
        Funingo Adventure Arena now and gear up for an <br/>
        adrenaline-fueled experience like never before. Gather <br/>
        your squad, strategize, and immerse yourself in the<br/>
        colorful chaos of paintball warfare. Secure your spot for <br/>
        an action-packed day of excitement, strategy, and <br/>
        unforgettable memories. Let the paintball battles begin!"<br/>
      </div>
      <div className='flex justify-center '>
        <button className='bg-[#61d716] my-7 p-4 text-white font-bold text-xl rounded-full outline-none active:scale-75 duration-300'>
          BOOK NOW
        </button>
      </div>
    </div>
  )
}
