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
        <div id='heading'>
          <h2 id='' className='w-[100vw] text-4xl font-bold text-white text-center mb-4 pt-6'>‘Secure Adventures, Fearless Fun’ </h2>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='grid md:grid-rows-4 grid-rows-8 grid-flow-col gap-y-10 gap-x-20'>

          <div className='flex w-[390px] ' id='white'>
            <div className='flex flex-col p-2' >
              <h2 className='text-xl font-semibold pb-4'>Safety Briefing:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className=' flex w-[390px] ' id='green'>
          <div className='flex flex-col  p-2 ' id='safety-measure'>
              <h2 className='text-xl font-semibold pb-4'>Protective Gear:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px] ' id='white'>
          <div className='bg-[#ededed]  p-2' id='safety-measure'>
              <h2 className='text-xl font-semibold pb-4'>Chronograph Testing:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px] ' id='green'>
          <div className=' p-2'  id='safety-measure'>
              <h2 className='text-xl font-semibold pb-4'>Barrel Covers:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px]' id='white'>
          <div className=' p-2 ' id='safety-measure'>
              <h2 className='text-xl font-semibold pb-4'>Field Inspection:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px]' id='green'>
          <div className=' p-2' id='safety-measure'>
              <h2 className='text-xl font-semibold pb-4'>First Aid and Emergency Procedures:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px] ' id='white'>
          <div className=' p-2' id='safety-measure'>
              <h2 className='text-xl font-semibold pb-4'>Player Physical Condition:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px]' id='green'>
          <div className='' id='safety-measure'>
              <h2 className='text-xl font-semibold pb-4'>Referee Oversight::</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
