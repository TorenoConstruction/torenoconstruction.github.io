import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  const toggleMenue = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }


  const navItems = [
    {
      link: 'Home', path: 'home'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Projects', path: 'projects'
    },
    {
      link: 'Contact', path: 'contact'
    },
  ]
  return (
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px16 px-7 sticky top-0 z-50 '>
    <h1 className='text-blue-800 md:text-4xl text-3xl font-bold font-rubik '>Toreno <span className='text-blue-800'>Construction</span></h1>

    <ul className='lg:flex justify-center items-center gap-6 hidden'>
    {navItems.map(( {link, path} ) => (
      <Link key={path} className='text-blue-800 uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-blue-500 hover:text-white text-[15px]'
      to={path} spy={true} offset={true}>{link}</Link>
    ))}
    </ul>
    {/* <button 
    className='bg-blue-500 hover:bg-blue-800 hover:text-white text-black px-7 py-2 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden '
    onClick={contactForm}>
    Contact Us
    </button> */}
    
    {/* mobile menu */}
    <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenue}>
      <div>
        {isMenuOpen ? <FaXmark className='text-blue-800 text-3xl cursor-pointer'/> : <FaBars className='text-blue-800 text-3xl cursor-pointer'/>  }
      </div>
    </div>
    <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-blue-100 p-4 absolute top-[42px] left-0`} onClick={closeMenu}>
      <ul className='flex flex-col justify-center items-center gap-2 w-full'>
      {navItems.map(({ link, path }) => (
        <Link key={path} className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-blue-500 hover:text-white text-center'
        to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
      ))}

      </ul>
    </div>
    </nav>
  )
}

export default Header