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
          
            Welcome to my portfolio site! I'm a lifelong learner dedicated to building innovative and user-centric software. 
            With experience ranging from startup environments to enterprise software, I have a track record of building impactful, end-to-end software solutions addressing the needs of both businesses and users alike.
            I love tackling user-facing challenges and am always eager to expand my skill set.

            Also, I'm a huge fan of Dungeons & Dragons.
          
        </p>
          

        <div style={{display: 'flex'}}>
        <div>
        <Link to='about' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            
              View Work
            
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>

        <div style={{marginLeft: '20px'}}>
        <Link to='skills' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            
              View Skills
            
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
