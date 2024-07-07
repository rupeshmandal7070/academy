import React from 'react'
import Countdown from './Timer'
import { Done, East } from '@mui/icons-material'

const Rewardsection = () => {
  return (
    <div className='md:h-[100vh] h-auto bg-black flex flex-col gap-3 items-center pb-[40px] md:pb-0'>
      <Countdown/>
      <div className='h-auto bg-[#151515] border border-[rgba(143,139,139,0.38)] md:w-[22%] w-[95%] rounded-xl p-4'>
          <div className='h-[40vh] w-full rounded-xl' style={{backgroundImage:`url('https://www.intract.io/assets/kol-reward-12e6ae06.gif')`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>

          </div>
          <div className='text-[#7f7d7d] font-semibold mt-2'>Exclusive community</div>
          <div className='border border-dashed border-[rgba(143,139,139,0.38)] mt-2'>

      </div>
      <div className='flex justify-between mt-2'>
      <div className='text-[#7f7d7d] text-[12px]'>Complete all Essential quests</div>
      <div className='h-[25px] w-[25px] rounded-[50px] border border-[rgba(143,139,139,0.38)] bg-[#3E3E3E] flex justify-center items-center'>
                    <Done sx={{color:'white',fontSize:'15px'}}/>
                </div>
      </div>

      <div className='flex justify-between mt-2'>
      <div className='text-[#7f7d7d] text-[12px]'>Complete at least 1 Alpha Hub quest today</div>
      <div className='h-[25px] w-[25px] rounded-[50px] border border-[rgba(143,139,139,0.38)] bg-[#3E3E3E] flex justify-center items-center'>
                    <Done sx={{color:'white',fontSize:'15px'}}/>
                </div>
      </div>
      <button className='w-full h-[40px] bg-[#252525] text-white rounded-md mt-3'>Claim Now <East/></button>
      </div>
    </div>
  )
}

export default Rewardsection
