import React from 'react'
import leftObject from './../assets/left-object.png'
import rightObject from './../assets/right-object.png'

export default function SafetyMeasures() {
  return (
    <div className='my-32'>
      <div>
        <div className='flex items-center justify-center gap-4'>
          <div id='object'><img src={leftObject} alt="" /></div>
          <h2 className='text-[#416233] text-4xl font-bold text-center'>Safety Measures at Funingo</h2>
          <div id='object'><img src={rightObject} alt="" /></div>
        </div>
        <h2 className='bg-[#416233] text-4xl font-bold text-white text-center mb-4 p-1'>‘Secure Adventures, Fearless Fun’ </h2>
      </div>
      <div>
        <div className='grid md:grid-rows-4 grid-rows-8 grid-flow-col gap-y-10 '>
          <div className='flex w-[390px] md:m-auto'>
            <div className='bg-[#ededed]  flex flex-col p-2' id='safety-measure'>
              <h2 className='text-xl font-semibold'>Safety Briefing:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className=' flex w-[390px] m-auto'>
          <div className='bg-[#a4cc81]  p-2 ' id='safety-measure'>
              <h2 className='text-xl font-semibold'>Protective Gear:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px] m-auto'>
          <div className='bg-[#ededed]  p-2' id='safety-measure'>
              <h2 className='text-xl font-semibold'>Chronograph Testing:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px] m-auto'>
          <div className='bg-[#a4cc81] p-2'  id='safety-measure'>
              <h2 className='text-xl font-semibold'>Barrel Covers:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px] m-auto'>
          <div className='bg-[#ededed] p-2 ' id='safety-measure'>
              <h2 className='text-xl font-semibold'>Field Inspection:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px] m-auto'>
          <div className='bg-[#a4cc81] p-2' id='safety-measure'>
              <h2 className='text-xl font-semibold'>First Aid and Emergency Procedures:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px] m-auto'>
          <div className='bg-[#ededed] p-2' id='safety-measure'>
              <h2 className='text-xl font-semibold'>Player Physical Condition:</h2>
              <p>Before the game begins, we conduct a 
                thorough safety briefing for all participants. 
                In which we cover essential rules, guidelines, 
                and emergency procedures
              </p>
            </div>
          </div>
          <div className='flex w-[390px] m-auto'>
          <div className='bg-[#a4cc81] p-2' id='safety-measure'>
              <h2 className='text-xl font-semibold'>Referee Oversight::</h2>
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
