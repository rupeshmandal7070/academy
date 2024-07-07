import { Facebook, Instagram, Telegram, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center bg-black'>
      <div className='md:h-[60vh] h-auto  w-[85%] mt-[50px]  '>
            <div className='w-[100%] md:h-[200px] h-auto flex md:justify-between md:flex-row flex-col border-b border-[rgba(165,162,162,0.2)]'>
               <div className='md:w-[30%] w-[90%]'>
                <div className='md:w-[80%] w-full'>
               <div>
             <img src='https://www.intract.io/logo/intract_text.svg'/>
          </div>
          <div className='text-[#7f7d7d] text-[15px] mt-[30px]'>
            We are your personal guide for exploring web3 projects $ earning 100x rewards
          </div>

                </div>
               </div>


               <div className='flex justify-between md:w-[60%] w-full flex-wrap mt-4 md:mt-0'>
                    <div className='flex flex-col gap-3'>
                        <div className='font-semibold text-white'>INTRACT</div>
                        <div className='text-[#7f7d7d]'>Explore Quests</div>
                        <div className='text-[#7f7d7d]'>Communities</div>
                        <div className='text-[#7f7d7d]'>Alpha Hub</div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className='font-semibold text-white'>EARN</div>
                        <div className='text-[#7f7d7d]'>Explore Quests</div>
                        <div className='text-[#7f7d7d]'>Communities</div>
                        <div className='text-[#7f7d7d]'>Alpha Hub</div>
                    </div>

                    <div className='flex flex-col gap-3 mt-4 md:mt-0'>
                        <div className='font-semibold text-white'>ABOUT</div>
                        <div className='text-[#7f7d7d]'>Explore Quests</div>
                        <div className='text-[#7f7d7d]'>Communities</div>
                        <div className='text-[#7f7d7d]'>Alpha Hub</div>
                    </div>

                    <div className='flex flex-col gap-3 mt-4 md:mt-0'>
                        <div className='font-semibold text-white'>SUPPORT</div>
                        <div className='text-[#7f7d7d]'>Explore Quests</div>
                        <div className='text-[#7f7d7d]'>Communities</div>
                        <div className='text-[#7f7d7d]'>Alpha Hub</div>
                    </div>
               </div>
            </div>


            <div className='py-7 w-full border-b border-[rgba(165,162,162,0.2)]'>
                <span className='font-semibold text-white'>Disclaimer: </span>
                <span className='text-[#7f7d7d]'>Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.</span>
            </div>


            <div className='flex justify-between w-full mt-[30px] pb-5 md:pb-0'>
            <div className='font-semibold text-white'>CREATED BY RUPESH</div>
            <div className='flex items-center gap-4'>
                <Twitter sx={{color:'blue'}}/>
                <Telegram sx={{color:'blue'}}/>
                <Instagram sx={{color:'red'}}/>
                <Facebook sx={{color:'blue'}}/>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
