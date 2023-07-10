import React from 'react';
//import { data } from "../data/data.js";
import aws from "../assets/aws.png";
import BugTrackerImg from '../assets/BugTrackerImg.png';
import SoundbytesImg from '../assets/SoundbytesImg.png';
import Acoustic_Release_Image_3 from '../assets/Acoustic_Release_Image_3.png';
import Quakes_Page from '../assets/Quakes_Page.png';

const projects = {
 Bugtracker: {
    title: 'Bug Tracker',
    desc: 'Ticketing system that helps developer teams efficiently organize project tickets',
    tools: 'C#, Javascript, ASP.NET, React, SQLite',
    image: BugTrackerImg,
    link: 'https://bug-tracker-km.vercel.app/login',
    git: 'https://github.com/kmanikon/Bug-Tracker'
 },
 Soundbytes: {
    title: 'Soundbytes',
    desc: 'Web application that utilizes text-to-speech to generate audio books from uploaded PDFs',
    tools: 'Javascript, React, Node.js, Express, Docker',
    image: SoundbytesImg,
    link: 'https://sound-bytes.vercel.app/auth',
    git: 'https://github.com/kmanikon/Soundbytes'
  },
  Capstone: {
    title: 'Acoustic Release',
    desc: "Team project to build an undersea probe for tracking seasonal whale migrations",
    tools: 'C, Python, Matplotlib',
    image: Acoustic_Release_Image_3,
    link: '',
    git: 'https://github.com/QueMona98/acoustic-release/tree/main'
  },
  Quakes: {
    title: 'Quake Search',
    desc: 'Website for visualizing earthquake data collected by the US Geological Survey',
    tools: 'Javascript, React, Tailwind CSS',
    image: Quakes_Page,
    link: 'https://quakes-peach.vercel.app/home',
    git: 'https://github.com/kmanikon/Quakes_Updated'
  }
  
};


const Work = () => {

    // projects file
    //const project = data;
    //setProject(data);

    const ClickableImage = ({ imageUrl, onClick, linkUrl }) => {
      return (
        <div 
        className="relative w-200 h-100 border-4 border-blue-500"
        >
          {linkUrl !== '' ?
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              alt="Clickable Image"
              className="transition-transform duration-300 ease-in-out transform hover:scale-90 cursor-pointer"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out font-bold"
              onClick={onClick}
            >
              Go To Project
            </div>
            </a>
          :
            <div>
            <img
              src={imageUrl}
              alt="Clickable Image"
              className="transition-transform duration-300 ease-in-out transform hover:scale-90 cursor-pointer"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out font-bold"
              onClick={onClick}
            >
            
            </div>
            </div>
          }
        </div>
      );
    };

    

  
  return (
    <div>
    

      <div>
      <div name='work' className='w-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Projects</p>
                <p className='py-4'></p>
            </div>
          
  
          <div>
  
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold my-0'>
                <p className="my-0 leading-7">{projects['Bugtracker'].title}</p>

                <p className='text-[#8892b0] py-4 max-w-[800px] text-xl my-0 leading-7'>
                  <div>{projects['Bugtracker'].desc}</div>
                  
                </p>

                <p className='text-[#8892b0] py-4 max-w-[800px] text-xl my-2 leading-3'>
                  <div>{projects['Bugtracker'].tools}</div>                  
                </p>

                <div className="h-4" />

                <div className="flex flex-row ... justify-end">
                    <a href={projects['Bugtracker'].link} target="_blank" rel="noopener noreferrer" 
                      className="text-xl inline-block py-1 px-4 text-white font-semibold rounded border-2 border-white-500 hover:bg-gray-500 transition duration-300"
                    >
                      {'Project'}
                    </a>

                    <div className="w-4" />


                    <a href={projects['Bugtracker'].git} target="_blank" rel="noopener noreferrer" 
                      className="text-xl inline-block py-1 px-4 text-white font-semibold rounded border-2 border-white-500 hover:bg-gray-500 transition duration-300"
                    >
                      {'Source Code'}
                    </a>
         
                </div>



  
              </div>
              <div>
              <ClickableImage imageUrl={projects['Bugtracker'].image} linkUrl={projects['Bugtracker'].link}/>
              </div>
            </div>
  
          </div>
  
          <p className="my-11"></p>


          <div>
  
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold my-0'>
                <p className="my-0 leading-7">{projects['Soundbytes'].title}</p>

                

                <p className='text-[#8892b0] py-4 max-w-[800px] text-xl my-0 leading-7'>
                  <div>{projects['Soundbytes'].desc}</div>
                  
                </p>

                <p className='text-[#8892b0] py-4 max-w-[800px] text-xl my-2 leading-3'>
                  <div>{projects['Soundbytes'].tools}</div>                  
                </p>

                <div className="h-4" />

                <div className="flex flex-row ... justify-end">
                    <a href={projects['Soundbytes'].link} target="_blank" rel="noopener noreferrer" 
                      className="text-xl inline-block py-1 px-4 text-white font-semibold rounded border-2 border-white-500 hover:bg-gray-500 transition duration-300"
                    >
                      {'Project'}
                    </a>

                    <div className="w-4" />


                    <a href={projects['Soundbytes'].git} target="_blank" rel="noopener noreferrer" 
                      className="text-xl inline-block py-1 px-4 text-white font-semibold rounded border-2 border-white-500 hover:bg-gray-500 transition duration-300"
                    >
                      {'Source Code'}
                    </a>
          
                </div>



              </div>

              <div>
              <ClickableImage imageUrl={projects['Soundbytes'].image} linkUrl={projects['Soundbytes'].link}/>
              </div>
            </div>

          </div>




          <p className="my-11"></p>


          <div>
  
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold my-0'>
                <p className="my-0 leading-7">{projects['Capstone'].title}</p>

                

                <p className='text-[#8892b0] py-4 max-w-[800px] text-xl my-0 leading-7'>
                  <div>{projects['Capstone'].desc}</div>
                  
                </p>

                <p className='text-[#8892b0] py-4 max-w-[800px] text-xl my-2 leading-3'>
                  <div>{projects['Capstone'].tools}</div>                  
                </p>

                <div className="h-4" />

                <div className="flex flex-row ... justify-end">
                   


                    <a href={projects['Capstone'].git} target="_blank" rel="noopener noreferrer" 
                      className="text-xl inline-block py-1 px-4 text-white font-semibold rounded border-2 border-white-500 hover:bg-gray-500 transition duration-300"
                    >
                      {'Source Code'}
                    </a>
          
                </div>



              </div>

              <div >
              <ClickableImage imageUrl={projects['Capstone'].image} linkUrl={projects['Capstone'].link}/>
              </div>
            </div>

          </div>


          <p className="my-11"></p>


          <div>
  
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold my-0'>
                <p className="my-0 leading-7">{projects['Quakes'].title}</p>

                

                <p className='text-[#8892b0] py-4 max-w-[800px] text-xl my-0 leading-7'>
                  <div>{projects['Quakes'].desc}</div>
                  
                </p>

                <p className='text-[#8892b0] py-4 max-w-[800px] text-xl my-2 leading-3'>
                  <div>{projects['Quakes'].tools}</div>                  
                </p>

                <div className="h-4" />

                <div className="flex flex-row ... justify-end">
                    <a href={projects['Quakes'].link} target="_blank" rel="noopener noreferrer" 
                      className="text-xl inline-block py-1 px-4 text-white font-semibold rounded border-2 border-white-500 hover:bg-gray-500 transition duration-300"
                    >
                      {'Project'}
                    </a>

                    <div className="w-4" />


                    <a href={projects['Quakes'].git} target="_blank" rel="noopener noreferrer" 
                      className="text-xl inline-block py-1 px-4 text-white font-semibold rounded border-2 border-white-500 hover:bg-gray-500 transition duration-300"
                    >
                      {'Source Code'}
                    </a>
          
                </div>



              </div>

              <div>
              <ClickableImage imageUrl={projects['Quakes'].image} linkUrl={projects['Quakes'].link}/>
              </div>
            </div>

          </div>

          <p className="my-11"></p>
          <p className="my-11"></p>
  
  
        
  
  
  
          
  
        </div>
      </div>
  
      </div>
      </div>
  );
};

export default Work;
