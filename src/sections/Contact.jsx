import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_rbkwnen',
        'template_uc9s619',
        {
          from_name: form.name,
          to_name: "Olessya MV",
          from_email: form.email,
          to_email: "lisonok@hotmail.com",
          message: form.message,
        },
        '8qC5XKSTqmfHg4t6k'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id='contact' className='bg-white w-full'>
    <div className='lg:w[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start'>
    <motion.div
    initial='hidden'
    whileInView='visible'
    variants={slideUpVariants}
    className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
      <motion.h1
      variants={slideUpVariants}
      className='text-blue-500 text-2xl uppercase'>
        book your appointment
    
      </motion.h1>
      <motion.h1
      variants={slideUpVariants}
      className='text-blue-800 uppercase text-[40px] font-bold'>
        Let's work together 
        <p className='text-[15px] text-blue-500'> Or rich us via: info@torenoconstruction.com</p>
        <p className='text-[20px] text-blue-500'>Phone Number: <a href="tel:number" >647-554-5777</a></p>
      </motion.h1>
      {/* line */}
      <div className='w-[120px] h-[6px] bg-blue-500'></div> 
      {/*text under line*/}
      <p className='text-3xl italic text-gray-700 mt-[60px] mr-6'>We are the leader with over 10 years of experience in the construction market!</p>
      </motion.div>
      
    <motion.div
    initial='hidden'
    whileInView='visible'
    variants={slideUpVariants}
    className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
      <motion.form
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      ref={formRef}
      onSubmit={handleSubmit}
      className='flex flex-col justify-center items-center gap-4 w-full'
      >
      <input type='text'
              name='name'
              placeholder='Enter Your Name'
              value={form.name}
              onChange={handleChange}
              className='px-6 py-3 border-[2px] border-blue-800 text-blue-800 rounded-lg w-full ' />

      <input type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter E-mail' 
              className='px-6 py-3 border-[2px] border-blue-800 text-blue-800 rounded-lg w-full ' />
      <input type='number' 
              placeholder='Enter Mobile Number' 
              className='px-6 py-3 border-[2px] border-blue-800 text-blue-800 rounded-lg w-full ' />

      <textarea name='message' 
                placeholder='Enter your message' 
                rows='4' 
                value={form.message}
                onChange={handleChange}
                className='px-6 py-3 border-[2px] border-blue-800 text-blue-800 rounded-lg w-full' />
      <motion.button
      variants={zoomInVariants}
      type='submit'
      className='bg-blue-800 hover:bg-blue-500 px-10 py-4 text-black font-bold rounded-lg w-full '>
        {loading ? "Sending..." : "Send"}
      </motion.button>
      </motion.form>
      </motion.div>
    

    </div>
    </div>
    
  )
}

export default Contact