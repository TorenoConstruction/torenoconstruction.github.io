import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { allservices } from '../export';


const Services = () => {
  return (
    <div id='services' className='w-full bg-white'>
      <motion.div
      initial='hidden'
      whileInView='visible'
      variants={slideUpVariants}
      className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
      <motion.h1 
      variants={slideUpVariants}
      className='text-blue-800 text-[40px] uppercase font-bold text-center'>
        our services
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
      className='w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-start gap-[20px]'>
      {
        allservices.map((item, index)=> (
          <motion.div
          variants={zoomInVariants}
          className='flex justify-center items-start gap-5 p-8'
          key={index}>
          <img src={item.icon} alt='icon'
            className='w-[80px] border-2 border-blue-800 hover:bg-blue-200 rounded-lg p-3'
          />
          <div className='flex flex-col justify-center items-start gap-3 '>
            <h1 className='text-xl font-bold text-blue-800'>{item.title}</h1>
            <p className='text-[18px] '>{item.about}</p>
          </div>
          </motion.div>
        ))
      }
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Services