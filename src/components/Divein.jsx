import React from 'react'
import armedMan from './../assets/armed.png'

export default function Divein() {
  return (
    <div className=''>
      <div className=''>
        <h2 className='text-center text-3xl font-bold uppercase text-[#416233]'>
          Dive into a Colorful Showdown at <br/>Funingo Adventure Arena's Paintball Battlefield!
        </h2>
        <div className='flex justify-between items-center'>
          <div className='m-auto' id='armed-box'>
            <img src={armedMan} alt="" width={500}/>
          </div>
        </div>
        <div className='' id='cover'>
          <div className='pb-2' >
              <p className='text-center text-2xl text-white font-bold pt-24 pb-4'>
              Get ready to unleash your inner warrior in a
paint-soaked spectacle at Funingo Adventure Arena's
Paintball Battlefield. Our adrenaline-fueled battlegroun
is the perfect playground for thrill-seekers,
where strategy meets action in a vibrant burst of colors
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}
