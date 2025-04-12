import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export const App = () => {
  const [timeLeft, setTimeLeft] = useState({ hr: 0, min: 0, sec: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const targetTime = new Date("2025-04-22T12:00:00").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setExpired(true);
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ hr: hours, min: minutes, sec: seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-amber-100 min-h-screen'>

      <header className='w-full h-[8rem] mt- flex justify-center items-center'>
        <motion.img className='w-[]rem h-full' src="/images/ganeshji.png" alt="ganeshji" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
        </motion.img>
      </header>

      <div className='flex flex-col justify-center items-center'>
        <div className='text-[1.5rem] pacifico-regular text-amber-900'>Wedding Invitation</div>
        <div className='flex justify-center items-center gap-5 text-amber-900'>
          <div>{timeLeft.hr}h</div>
          <div>{timeLeft.min}m</div>
          <div>{timeLeft.sec}s</div>
        </div>
      </div>

      <footer className='h-[5rem] w-screen bg-slate-900 text-amber-200 flex flex-col justify-center items-center'>
        <div>@2025 VayuSoftwares</div>
        <div>The Digital Wedding Cards Developers</div>
      </footer>
      
    </div>
  )
}

