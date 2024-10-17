import React from 'react';
import heroimg from '../assets/heroimg.png';
import backgroundImage from '../assets/project1.jpg';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';


const Hero = () => {
  return (
    <div id='home' className='bg-indigo-100 w-full lg:h-[700px] h-fit m-auto pt-[60px] 
    lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row
    flex-col lg:gap-5 gap-[50px] bg-cover bg-center ' style={{backgroundImage:`url(${backgroundImage})`}}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'>
      <motion.h1
      variants={slideUpVariants}
      className='text-blue-500 text-2xl uppercase'>
          WE ARE professionals
      </motion.h1>
      <motion.h1
     variants={slideUpVariants}
     className='text-blue-800 uppercase text-[40px] font-bold'>
      we bring your dream home to life
     </motion.h1>
     <div className='w-[120px] h-[6px] bg-blue-800'></div>
     <p className='text-gray-800 text-[30px]'>A renovation company specializing in high-quality craftsmanship, offering personalized designs tailored to client needs, ensuring exceptional customer satisfaction and results.</p>
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants="zoom"
    className='flex justify-center items-center gap-5'
    >
      {/* <motion.button
      variants={zoomInVariants}
      className='bg-blue-800 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold uppercase'
      >
      Contact us
      </motion.button> */}
      {/* <motion.button
      variants={zoomInVariants}
      className='border-gray-800 border-2 hover:border-blue-800 hover:text-blue-800 px-10 py-3 rounded-lg text-gray-800 font-bold'
      >
      REACH US
      </motion.button> */}
    </motion.div>
    </motion.div>
    </div>
  )
}

export default Hero;