import { LiveTv, Menu, Search } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[60px] bg-[rgba(0,0,0,0.3)] w-full flex justify-center fixed border-b-[0.2px] border-[#6b6b6b] z-10'>
      <div className='md:w-[83%] w-[95%] h-full flex justify-between items-center'>
          <div>
             <img src='https://www.intract.io/logo/intract_text.svg'/>
          </div>

          <div className='md:flex gap-7 hidden'>
              <p className='text-[16px] font-[400] text-white '>Compass</p>
              <p className='text-[16px] font-[400] text-white '>Explore</p>
              <p className='text-[16px] font-[400] text-white '>Academy</p>
              <p className='text-[16px] font-[400] text-white '>NFTs</p>
              <p className='text-[16px] font-[400] text-white '>For Projects</p>
          </div>

          <div className='md:w-[50%] flex items-center justify-end gap-3'>
          <div style={{width:'75%',height:'100%',alignItems:'center',borderRadius:'40px'}} className='bg-[rgba(97,94,94,0.3)] md:flex hidden'>
                 <TextField variant='outlined' size='small'  
                 fullWidth 
                 InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{color:'whitesmoke'}}/>
                    </InputAdornment>
                  )
                }} placeholder='Search for ecosystem, trending quests etc' sx={{'& fieldset':{borderRadius:'40px',color:'whitesmoke'},background:'transparent',color:'white',borderRadius:'40px', '& .MuiOutlinedInput-root': {
                    '& input': {
                        color: 'white', // Input text color
                      },
                    '& input::placeholder': {
                      color: 'whitesmoke',
                      fontSize:'12px'
                    },
                    '&.Mui-focused fieldset': {
                   border:'1px solid #181818', // Change to your desired color
                  }
                  },
                  width:'100%' ,}}/>
               
              </div>

    <div className='h-[45px] w-[45px] rounded-[50px] border border-orange-400 flex justify-center items-center'>
        <LiveTv sx={{color:'orange'}}/>
    </div>

    <button className='h-[32px] w-[90px] bg-white text-black rounded-md text-[14px]'>Sign in</button>

    <div className='md:hidden block'>
        <Menu sx={{color:'white'}}/>
    </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
