"use client"
import { AccessTime } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const targetTime = new Date(new Date().getTime() + 20 * 60 * 60 * 1000); // 10 hours from now

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetTime - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

    <div className='w-full flex justify-center'>

    
    <div className="bg-[#151515] text-white rounded-lg p-3 md:w-[22%] w-[95%] text-center border border-[rgba(143,139,139,0.38)]">
      <div className="flex items-center  text-lg mb-4 gap-2 text-[rgba(143,139,139,0.38)]">
        <AccessTime sx={{color:'orange'}}/>
         Reward unlocks in
      </div>

      <div className='border border-dashed mb-4 border-[rgba(143,139,139,0.38)]'>

      </div>
      <div className="flex justify-between border border-[rgba(143,139,139,0.38)] p-4 rounded-xl" style={{backgroundImage:`url('https://www.intract.io/assets/dotBg-149528a0.png')`,backgroundSize:'cover'}}>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
          <div className="mt-1 text-gray-400">Days</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <div className="mt-1 text-gray-400">Hrs</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <div className="mt-1 text-gray-400">Mins</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <div className="mt-1 text-gray-400">Sec</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Countdown;
