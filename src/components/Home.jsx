import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='pt-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Kiran Manikonda
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Developer.
        </h2>
        
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          
            Welcome to my portfolio site! I’m a lifelong learner with experience creating end-to-end software solutions 
            for both startups and enterprise systems. I thrive on solving user-facing challenges and continuously
            expanding my skillset. Also, I’m a huge D&D fan.
          
        </p>
          

       <div className="my-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5">
        <Link to="about" smooth={true} duration={500}>
          <button className="group flex items-center justify-center w-full sm:w-auto px-5 py-3 border-2 border-[#ccd6f6] text-[#ccd6f6] rounded-lg bg-transparent hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm">
            Experience
            <span className="ml-3 transform group-hover:rotate-90 transition-transform duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </Link>

        <Link to="skills" smooth={true} duration={500}>
          <button className="group flex items-center justify-center w-full sm:w-auto px-5 py-3 border-2 border-[#ccd6f6] text-[#ccd6f6] rounded-lg bg-transparent hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm">
            Skills
            <span className="ml-3 transform group-hover:rotate-90 transition-transform duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </Link>

        <Link to="work" smooth={true} duration={500}>
          <button className="group flex items-center justify-center w-full sm:w-auto px-5 py-3 border-2 border-[#ccd6f6] text-[#ccd6f6] rounded-lg bg-transparent hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm">
            Projects
            <span className="ml-3 transform group-hover:rotate-90 transition-transform duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </Link>
      </div>



      </div>
    </div>
  );
};

export default Home;
