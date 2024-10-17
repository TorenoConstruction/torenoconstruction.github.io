import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';


const About = () => {
  return (
    <div className='lg:w[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start' id='about'>
    <motion.div
    initial='hidden'
    whileInView='visible'
    variants={slideUpVariants}
    className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
      <motion.h1
      variants={slideUpVariants}
      className='text-blue-500 text-2xl'>
        WELCOME TO
      </motion.h1>
      <motion.h1
      variants={slideUpVariants}
      className='text-blue-800 uppercase text-[40px] font-bold'>
        Toreno Construction
      </motion.h1>
      {/* line */}
      <div className='w-[120px] h-[6px] bg-blue-500'></div> 
      {/*text under line*/}
      <p className='text-3xl italic text-gray-700 mr-6'>We are the leader with over 10 years of experience in the construction market!</p> <br />
      {/* <motion.button
        variants={zoomInVariants}
        className='uppercase bg-blue-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg front-bold text-black'
        onClick={<a href="tel:number">647-554-5777</a>}>
          contact us 
        </motion.button> */}
      </motion.div>
    <motion.div
    initial='hidden'
    whileInView='visible'
    variants={slideUpVariants}
    className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
    <p className='text-lg italic text-gray-700 text-justify'
      >Welcome to Toreno Construction, Your Renovation Experts</p>
      <p className='text-lg italic text-gray-700 text-justify'>At Toreno Construction, we are dedicated to delivering superior craftsmanship and exceptional service on every project. With over a decade of experience, we have established ourselves as a trusted name in the renovation industry, specializing in kitchen, bathroom, basement, and full house renovations. From concept to completion, you can trust us to make your renovation dreams a reality.</p>
        
      
      </motion.div>
  

    </div>
  )
}

export default About