import { East, ModeComment } from '@mui/icons-material'
import React from 'react'

const Header = () => {
  return (

    <div>
        <div className='h-[60px] bg-black '>

        </div>
    <div className='text-black md:h-[110vh] h-[50vh] w-full pt-[60px]'  style={{ backgroundImage: `url('/bg.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
      <div className='md:h-[70vh] h-auto flex justify-center flex-col items-center gap-4'>
          <img src='https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif' className='h-[100px] mix-blend-screen'/>

          <div className='text-white md:w-[40%] w-[90%] text-center text-[18px]'>Intract users have together made more than $100 million in web3.
          Join them and learn how to earn crypto!</div>

          <button className='md:w-[15%] w-[70%] h-[40px] bg-[#7041EB] text-white rounded-md md:mt-10 mt-5'>Get Started <East/></button>
      </div>


      <div className='h-[50px] w-[50px] bg-white fixed bottom-[20px] right-[20px] rounded-[50px] flex justify-center items-center'>
         <ModeComment/>
      </div>

      <div className='md:w-[20%] w-[70%] h-[40px] border border-[rgba(62,62,62,0.3)] rounded-[40px] fixed bott bottom-[20px] md:left-[40%] left-[10%] bg-[rgba(97,94,94,0.3)] flex'>
          <button className='h-[40px] w-[50%] rounded-[40px] bg-[#343232] text-white'>Essentials</button>
          <button className='h-[40px] w-[50%] rounded-[40px] bg-transparent text-white hover:bg-[#343232]'>Alpha Hub</button>
      </div>
    </div>
    </div>
  )
}

export default Header
