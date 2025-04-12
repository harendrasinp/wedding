import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from 'framer-motion'
export const App = () => {
  const [timeLeft, setTimeLeft] = useState({ hr: 0, min: 0, sec: 0 });
  const [expired, setExpired] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
    <div className='bg-amber-100 min-h-screen flex flex-col justify-between'>

      <header className='w-full h-[8rem] mt- flex justify-center items-center'>
        <motion.img className='w-[]rem h-full' src="/images/ganeshji.png" alt="ganeshji" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
        </motion.img>

        <div className='flex flex-col justify-center items-center'>
          <div className='text-[1.5rem] pacifico-regular text-amber-900'>Wedding Invitation</div>
          <div className='flex justify-center items-center gap-5 text-amber-900'>
            <div>{timeLeft.hr}h</div>
            <div>{timeLeft.min}m</div>
            <div>{timeLeft.sec}s</div>
          </div>
          <div className='text-amber-900'>Date:22/04/2025</div>
        </div>
      </header>

      <div className='felx-1 flex flex-col justify-cente items-center'>
        <div className='tangerine-regular text-[2rem] text-amber-900'>Divya wed's Vaibhav</div>
        <div>
          <Slider {...settings} className='flex justify-center items-center w-[21.5rem]'>
            {/* <div className='flex justify-center items-center'> */}
            <div className='w-[20rem] h-[12rem]'><img className='w-full h-full' src="/images/background.jpg" alt="g" /></div>
            <div className='w-[20rem] h-[12rem]'><img className='w-full h-full' src="/images/background.jpg" alt="g" /></div>
            <div className='w-[20rem] h-[12rem]'><img className='w-full h-full' src="/images/background.jpg" alt="g" /></div>
            {/* </div> */}
          </Slider>
        </div>
      </div>

      <footer className='h-[5rem] w-screen bg-slate-900 text-amber-200 flex flex-col justify-center items-center'>
        <div>@2025 VayuSoftwares</div>
        <div>The Web and Digital Cards Developers</div>
      </footer>

    </div>
  )
}

