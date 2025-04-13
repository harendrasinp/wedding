import React, { useEffect, useState, useRef } from 'react'
import Slider from "react-slick";
import { useCountdown } from './Countdown';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'
export const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const mehandiTime = "2025-04-20T10:00:00";
  const haldiTime = "2025-04-21T10:00:00";
  const weddingTime = "2025-04-22T12:35:00";

  const mehandiCountdown = useCountdown(mehandiTime);
  const haldiCountdown = useCountdown(haldiTime);
  const weddingCountdown = useCountdown(weddingTime);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log("Error playing audio:", err));
    }
  }, [weddingCountdown.timeLeft.sec])

  return (
    <div className='bg-[url("/images/bg4.jpeg")] bg-cover min-h-full w-full bg-center bg-no-repeat flex flex-col justify-between'>
      <audio ref={audioRef} src="/music/EkDantay.mp3" loop autoPlay hidden />
      <header className='w-full h-[8rem] flex'>
        <motion.img className='w-[]rem h-full' src="/images/ganeshji.png" alt="ganeshji" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
        </motion.img>

        <div className='flex flex-col justify-center items-center'>
          <div className='text-[1.5rem] pacifico-regular text-amber-900 '>Wedding Invitation</div>
          <div className='flex justify-center items-center gap-2 text-amber-900 font-semibold'>
            <div>{weddingCountdown.timeLeft.hr}h</div>
            <div>{weddingCountdown.timeLeft.min}m</div>
            <div>{weddingCountdown.timeLeft.sec}s</div>
          </div>
          <div className='text-amber-900 font-semibold'>Date:22/04/2025</div>
        </div>
      </header>

      <div className='flex-1 flex flex-col justify-center items-center'>
        <marquee scrollamount="3" className="text-amber-900 text-[1rem] font-semibold w-[10rem]">
          वक्रतुण्ड महाकाय मंत्र "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा।
        </marquee>
        {/* ----------------------------------Mehandi and Haldi--------------------------------- */}
        <div className='min-w-screen flex justify-center items-center gap-[5rem] '>

          <div className='text-green-800 text-[1rem] flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center gap-1.5'>
              <div className='pacifico-regular'>Mehandi</div>
              <div className='w-[2rem] h-[2rem]'><img src="/images/mehandi.png" alt="mehandi" /></div>
            </div>
            <div className='flex justify-center items-center gap-2 text-amber-900 font-semibold'>
              <div>{mehandiCountdown.timeLeft.hr}h</div>
              <div>{mehandiCountdown.timeLeft.min}m</div>
              <div>{mehandiCountdown.timeLeft.sec}s</div>
            </div>
            <div className='text-amber-900 font-semibold'>Date:20/04/2025</div>
          </div>
          <div className='text-yellow-600 text-[1rem] flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
              <div className='w-[2.5rem] h-[2.5rem]'><img src="/images/haldi2.png" alt="mehandi" /></div>
              <div className='pacifico-regular'>Haldi</div>
            </div>
            <div className='flex justify-center items-center gap-2 text-amber-900 font-semibold'>
              <div>{haldiCountdown.timeLeft.hr}h</div>
              <div>{haldiCountdown.timeLeft.min}m</div>
              <div>{haldiCountdown.timeLeft.sec}s</div>
            </div>
            <div className='text-amber-900 font-semibold'>Date:21/04/2025</div>
          </div>

        </div>
        {/* ---------------------------------wedding Message-------------------------------------- */}
        <div className='mt-3 text-amber-900 text-[1rem] min-w-screen px-8 text-justify'>
          प्रथम पुजावा श्री गणपती । धन्य ती भारतीय संस्कृती ।।
          ज्ञानेश्वराने चालवल्या भिंती । अर्जुनाच्या रथावर श्रीकृष्ण सारथी ।।
          सर्व काही ईश्वराच्या हाती । तोच जुळवितो नाती गोती ।।
          वधु-वरास आशिर्वाद द्यावेत हीच आमची नम्र विनंती &nbsp;
          <b>सौ. रत्नाबाई व श्री. राजेंद्र रमण चौधरी</b>
        </div>
        {/* --------------------------------Corosel----------------------------------------------- */}
        <div><img className='w-[5rem] h-[5rem]' src="images/dd.png" alt="dd" /></div>
        <div className='tangerine-regular font-semibold text-[2rem] text-amber-900'>Divya wed's Vaibhav</div>
        <div>
          <Slider {...settings} className='bg-[url("/images/coroselbg.jpg")] bg-cover bg-no-repeat flex justify-center items-center w-[21rem] h-[11rem] border-4 border-y-amber-900'>
            <div className='w-[19rem] h-[11rem] outline-none'>
              <img className='w-full h-[10.5rem] block' src="/images/b1.jpg" alt="g" />
            </div>
            <div className='w-[19rem] h-[11rem] outline-none'>
              <img className='w-full h-[10.5rem] block' src="/images/b2.jpg" alt="g" />
            </div>
            <div className='w-[19rem] h-[11rem] outline-none'>
              <img className='w-full h-[10.5rem] block' src="/images/b3.jpg" alt="g" />
            </div>
            <div className='w-[19rem] h-[11rem] flex justify-center items-center'>
              <img className='w-[8rem] h-[10.5rem]' src="/images/b4.jpg" alt="g" />
            </div>
          </Slider>
        </div>

        <div className='mb-8 flex flex-col justify-center items-center '>
          <div className='text-amber-900 text-[2rem] font-bold tangerine-regular mt-5'>Wedding Location</div>
          <iframe className='w-[18rem] h-[10rem] border-8 border-amber-950/80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.939596231571!2d74.47035617402565!3d21.549217069701946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf6c5f7828f8a1%3A0x374db74fadedcc02!2sSantaji%20Tailik%20mangal%20Karyalay!5e0!3m2!1sen!2sin!4v1744484040905!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>
      <footer className='h-[5rem] w-screen bg-slate-900 text-amber-200 flex flex-col justify-center items-center'>
        <div>@2025 VayuSoftwares</div>
        <div>Harendrasinh.R.Parmar</div>
        <div>The Web and Digital Cards Developers Team</div>
      </footer>

    </div>
  )
}

