import { ImportContacts } from '@mui/icons-material'
import React from 'react'

const CryptoTerms = () => {
  return (
    <div className='md:h-[100vh] h-[55vh] w-full bg-black border-b border-[rgba(165,162,162,0.2)] '>
       <div className='w-full flex flex-col items-center pt-[50px] '>
          <div className='text-[24px] text-white'>Crypto Dictionary</div>
          <div className='text-[#7f7d7d]'>Your one-stop to catch up on all crypto terms</div>
          </div>

          <div className='w-full flex justify-center mt-[50px]'>
            <div className='md:w-[78%] w-[90%] md:h-[65vh] h-[30vh] rounded-lg p-4' style={{backgroundImage:`url('https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg')`,backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                 <div className='flex justify-between h-full items-end'>
                    <div>
                        <div className='text-white text-[23px] font-semibold'>Web3 + Degen Glossary</div>
                        <div className='text-[#7f7d7d]'>Your own crypto dictionary</div>
                    </div>
                    <div className='h-[70px] w-[70px] bg-[#5F5C50] rounded-[50px] flex justify-center items-center'>
                       <ImportContacts sx={{color:'white'}}/>
                    </div>
                 </div>
            </div>
          </div>
    </div>
  )
}

export default CryptoTerms
