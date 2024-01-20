import React from 'react'
import armedMan from './../assets/armed.png'

export default function Divein() {
  return (
    <div className=''>
      <div className=''>
        <h2 className='text-center text-3xl font-bold uppercase my-4 text-[#416233]'>
          Dive into a Colorful Showdown at <br/>Funingo Adventure Arena's Paintball Battlefield!
        </h2>
        <div className='flex justify-between items-center'>
          <div className='m-auto' id='armed-box'>
            <img src={armedMan} alt="" width={500}/>
          </div>
        </div>
        <div className='mt-32'>
          <div className='bg-[#416233] py-8'>
              <p className='text-center text-2xl text-white font-bold'>
              Get ready to unleash your inner warrior in a <br/>
paint-soaked spectacle at Funingo Adventure Arena's <br/>
Paintball Battlefield. Our adrenaline-fueled battleground<br/>
is the perfect playground for thrill-seekers, <br/>
where strategy meets action in a vibrant burst of colors
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}
