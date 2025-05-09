import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import Resume from "../assets/Resume.pdf";
import { Link } from 'react-scroll';

const Navbar = () => { 
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const navbar = document.getElementById('navbar');

      if (scrollTop > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 transition-colors duration-300 ${
        nav ? 'scrolled' : ''
      }`}
      style={{ zIndex: 999 }} // Add this line to set a higher z-index
    >
      <div>
        <div className="border-b p-4 m-4 font-bold text-xl">Kiran Manikonda</div>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link className="navbarText" to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/*
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        */}
        <li>
          <Link className="navbarText" to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link className="navbarText" to='about' smooth={true} duration={500}>
            Experience
          </Link>
        </li>

        <li>
          <Link className="navbarText" to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link className="navbarText" to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        <div className="navbarText">
          {!nav ? <FaBars fontSize={32}/> : <FaTimes fontSize={32}/>}
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link className="navbarText" onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className="navbarText" onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className="navbarText" onClick={handleClick} to='about' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className="navbarText" onClick={handleClick} to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className="navbarText" onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://linkedin.com/in/kmanikon'
              target="_blank" rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/kmanikon'
              target="_blank" rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#301934]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto: kiranmanikonda123@gmail.com'
            >
              Email <HiOutlineMail size={30} /> 
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={Resume}
              target="_blank" rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
