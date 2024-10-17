import React from 'react'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { clients, planning } from '../export';

const Testimonials = () => {
  return (
    <div id='testimonials'>
      <motion.div
      initial='hidden'
      whileInView='visible'
      variants={slideUpVariants}
      className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
      <motion.h1 variants={slideUpVariants} 
      className='text-blue-500 text-2xl uppercase'>
        TESTIMONIALS
      </motion.h1>
      <motion.h1 
      variants={slideUpVariants}
      className='text-blue-800 text-[40px] uppercase font-bold text-center'>
        what they say about us
      </motion.h1>
      <motion.div
      variants={slideUpVariants}
      className='w-[120px] h-[6px] bg-blue-500'>
      </motion.div>
      {/*make div for services mapping from export file*/}
      <motion.div
      initial='hidden'
      whileInView='visible'
      variants={zoomInVariants}
      className='lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-[30px]'>
      {
        clients.map((item, index) => (
          <div key={index} className='flex flex-col justify-center items-center'>
          <div className='border-2 border-blue-800  hover:bg-blue-800 pb-[30px] pt-[30px] '>
          <p className='text-gray-800 text-lg text-center hover:text-white'>{item.about}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-[5px]'>
              
              <h1 className='text-blue-800 text-[20px] font-semibold uppercase '>{item.name}</h1>
              
          </div>
          </div>
        ))
      }
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Testimonials