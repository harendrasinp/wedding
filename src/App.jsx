import React from 'react'
import { motion } from 'framer-motion'
export const App = () => {
  return (
    <div>
        <div className='min-h-screen min-w-full bg-[url("/images/background.jpg")] bg-no-repeat bg-cover bg-center
        flex justify-center'>
          <div className='w-[8rem] h-[8rem] mt-8'>
            <motion.img className='w-full h-full' src="/images/ganeshji.png" alt="ganeshji" initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,delay:2}}></motion.img>
          </div>
        </div>
        <footer className='h-[5rem] w-screen bg-slate-900 text-amber-200 flex flex-col justify-center items-center'>
          <div>@2025 VayuSoftwares</div>
          <div>The Digital Wedding Cards Developers</div>
        </footer>
    </div>
  )
}

