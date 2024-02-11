import React from 'react'
import leftObject from './../assets/left-object.png'
import rightObject from './../assets/right-object.png'
import './SafetyMeasures.css'

export default function SafetyMeasures() {
  return (
    <div className='my-32'>
      <div>
        <div className='flex items-center justify-center gap-4'>
          <div id='object'><img src={leftObject} alt="" /></div>
          <h2 className='text-[#416233] text-4xl font-bold text-center'>Safety Measures at Funingo</h2>
          <div id='object'><img src={rightObject} alt="" /></div>
        </div>
        <div id='heading' className='h-[80px] flex items-center justify-center pt-4'>
          <h2 id='' className='w-[100vw] text-4xl font-bold text-white text-center mb-4 pt-6'>‘Secure Adventures, Fearless Fun’ </h2>
        </div>
      </div>
      <div className='flex items-center justify-center '>
        <div className='grid md:grid-rows-4 grid-rows-8 grid-flow-col gap-y-10 gap-x-20'>

          <div className='flex w-[410px] ' id='white'>
            <div className='flex flex-col p-4' >
              <h2 id='title' className='text-xl font-bold pb-4 text-[#416133]'>Safety Briefing:</h2>
              <p id='content'>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className=' flex w-[410px] ' id='green'>
          <div className='flex flex-col text-white p-4' id='safety-measure'>
              <h2 id='title' className='text-xl font-bold pb-4 '>Protective Gear:</h2>
              <p id='content' className='text-white'> We provide all players appropriate protective 
gear, including a full-face mask or goggles 
that meet safety standards. 
Our suits are designed with padded clothing,
 including long sleeves, pants, and gloves, to 
minimize the impact of paintball hits
              </p>
            </div>
          </div>
          <div className='flex w-[410px] ' id='white'>
          <div className='p-4' id='safety-measure'>
              <h2 id='title' className='text-xl font-semibold pb-4 text-[#416133]'>Chronograph Testing:</h2>
              <p id='content'>We run a chronograph testing procedure to 
ensure that paintball markers are shooting 
within the designated velocity and our in 
a perfect condition.   
              </p>
            </div>
          </div>
          <div className='flex w-[410px] ' id='green'>
          <div className=' p-4'  id='safety-measure'>
              <h2 id='title' className='text-xl font-semibold pb-4 text-white'>Barrel Covers:</h2>
              <p id='content' className='text-white'> Our trainers keep a check on players to make 
sure that they use barrel covers or barrel 
plugs when not actively engaged in the 
game. This prevents accidental discharges 
and keeps the paintball marker in a safe
 condition when not in use.
              </p>
            </div>
          </div>
          <div className='flex w-[410px]' id='white'>
          <div className='p-4' id='safety-measure'>
              <h2 id='title' className='text-xl font-semibold pb-4 text-[#416133]'>Field Inspection:</h2>
              <p id='content' className='text-[#416133]'> We conduct regular inspections of the playing 
field to identify and address any potential 
hazards. Remove or mark any obstacles, 
debris, or unsafe structures that could 
pose a risk to participants.
              </p>
            </div>
          </div>
          <div className='flex w-[410px]' id='green'>
          <div className=' p-4' id='safety-measure'>
              <h2 id='title' className='text-xl font-semibold pb-4 text-white'>First Aid and Emergency Procedures:</h2>
              <p id='content' className='text-white'> We have a well-equipped first aid station 
on-site with personnel trained in basic first 
aid and CPR.
 Establish clear emergency procedures, 
including communication methods and 
evacuation routes.
              </p>
            </div>
          </div>
          <div className='flex w-[410px] ' id='white'>
          <div className=' p-4' id='safety-measure'>
              <h2 id='title' className='text-xl font-semibold pb-4 text-[#416133]'>Player Physical Condition:</h2>
              <p id='content'> We ensure that participants are in suitable 
physical condition to engage in 
paintball activities.
              </p>
            </div>
          </div>
          <div className='flex w-[390px]' id='green'>
          <div className='p-4' id='safety-measure'>
              <h2 id='title' className='text-xl font-semibold pb-4 text-white'>Referee Oversight::</h2>
              <p id='content' className='text-white'> A team of qualified referees is assigned 
to oversee the game and enforce 
safety rules. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
