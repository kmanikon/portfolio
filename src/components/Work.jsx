import React from 'react';

import github from "../assets/github.png";
import BlockscapeImg from '../assets/BlockscapeImg.png'
import BugTrackerImg from '../assets/BugTrackerImg.png';
import SoundbytesImg from '../assets/SoundbytesImg.png';
import PasswordBuddyImg from '../assets/PasswordBuddyImg.png';
import Acoustic_Release_Image_3 from '../assets/Acoustic_Release_Image_3.png';
import ChurroImg from '../assets/ChurroImg.png';
import Quakes_Page from '../assets/Quakes_Page.png';


const projects = [
  {
    name: "Blockscape",
    description:
      "Browser-based 3D sandbox enviorment built in React and Three.js. Utilizes a Supabase serverless client and PostgresSQL database to store user projects. Features custom camera controls for mobile accessibility.",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "PostgresSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: BlockscapeImg,
    source_code_link: "https://github.com/kmanikon/Blockscape",
    linkUrl: "https://km-blockscape.vercel.app/",
  },
  {
    name: "Churro Network Visualizer",
    description:
      "Visualization tool for network-ops teams. Offers a flexible workspace for designing network structure mappings and URL-based state saving for quick sharing and rollback.",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "React Flow",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: ChurroImg,
    source_code_link: "https://github.com/kmanikon/Network-Visualizer",
    linkUrl: "https://churro-network-visualizer.vercel.app/?flow=N4Igdg9gJgpgziAXAbVASyk80YFoDKArmAAT4wAOJATAIw0AM1ArDdYi4s-QOICyAFVwNmDBiQAUAYRhgALgCcAhgBsSAESUBPFWgDmACzkkBaALYwAlCAA0IOVoowsAY0Jw5EM7ZAUIcNDk0CDAkUAAPJAA2AA4GADoo2gBmaijUhloogHZkgBY7LSRk7ITaPJjs6mp82m5s5gBfOyglOSUwkBUlACMYFSwABSkfNBcQgUdnRBBhnwN-OTAlCyw+LRJhklofdxgFLABpPgAqM5PR8dDEUABrGCLEMEIVFTsFGAAzJGfXuwoFBAKAgbo1miAPG13FgAPJgXRgZx2fxYADqaDAUAgAHcEHYzEoXFg8gBBLgAIUQUSkiGy6kQMQAoogAJwAMR8cGxgRcBgA+n4FHIsNlaKUQGCbOhMDNILACMQyJQaPRqExWNUOMwuKx+EIRGJJDJ5Mo1JodPojCZzFYfA4nK53J5vP9-IFgtcIkhaLQYsx4mJMswooHytRCkhmDEWfEWTUWXlMlFqKU0uDWu1Ot0+gMZgAlCCEOT7S4TKZYAtFkvvQvFhR85arGYCeDGSt17Y+QVyEEgFlxagFEgxNXMUuekD3R6-N4gD7fJ4vWcAoEg4CSiHtOTQmZwhFIkBmHC5kAkhRoSEkRkw-AkPLxfLxagcuyfNAKMzYpQfLC0eL35Iu0BTxxhPG9Bg5SVpSwOU8CIUhyCoOhGBYNgOCiRAGCiEg9WEURxGkWRFFUDRtF0QxjFMCxrDse1phANwPC8Ls3SCEJOkiVlshieIsmDftYkHbIcgjRA8n9BoGGSJIohySpKmodM2g6G4ul6fosHIBQADdqxAMYywdGYtN0g47DgfZTIbFZ6JbDwlR0-ZOzsNAKD5JQoCgD44F7VIH2ofz-zHFyrk6KcfiXd4vgiv5fEBYEwg3SFt17PcMQPFEZnUGAejQJRQhrFR6PwLQ4FwEkoDMDEfGUFxbiwKQpFwP8GFwGNqAlZpoNlHAFQQ5VkLVVDNTSLgWRwwQ8MNQiTRI81yKtKjbVo8sZkY50WICNiJ04rIWQSdI6gaGI8jSBTROoFk-xOuIZOYbiUwTJTM1U7MNPzWs9IMsBJiMkB2z0wEq3rRt6MZKA9BgEgAYUEhMhYoVe1oDqQvY1TwsXWL5xi5d4rXJKtx3EA0sRHwj1gE8ACliFcpy+AADTVPIfDfD8vx-GY1SfPNAP+YCIFArByR4QZOqlfSZWweV4KVJDVXVNCU0QZGJv1fCjSI01SItCjrWou1VoYp1mNdLaPQ471kz-fs8hDMU6G45HRNwKJ-RiZIYjifIbaqWhnpU0A3pPEyvquX7issvSLMckGbLRHKHNMuGdhctyPK8+AkbjXjYl43iGHHMKHhxqKFxnPnV0S8FkqJkmMt7ABVHpiG3NgA2Zwr6NRHKasJer8z7kgSR2MEAF07BgCH4CQVAJawPBYL62WVRQjV2E4bhVamgjjWIs0yMtSibUsXBF5lxCV6GtetR1LeDR3zW5oP3WlpPsUo24Op7pZKIWU5QsFAuHomfRUF9BoKxGtqTeuF74a1mvvHWi1j52m-JDYUPVpagIGvLYa68oG6kmrAmae9tYLSPvrFaf0PCUDJt+e4ChGSYk6HRLA35ATYglHYfK5g2iTyQIoQgMAupzxmAvXq59sGr0VlA3ghD1bEK1vNQ+esrCn3EVguWUiRoYSwnfeRu9FHPyQdRZqx1P5JGSCyD2-9CCAOAeo-qmir7SK4LItW00DFP0QeQ5a9hUEwHQVLOCGjL4QPXjo7CMD9GPwQWQlRNF7CG2oRQWhCh6GMJlKAFhMw2E4k4SAbhBJiwygEUI8WGB55qMwY40JuCb7MAIe4h+8DSHKNflU4JNTwF1NGswcaUSPExNaS-Y+piP4+mTImU6Ni7EwQccvbp18N6NO3nAkhSiRkUL8QoNBczqkLJwUsjCfS9GDJaRs4xvjsmbhofiOh+wMnMMNrkjh4JCm8JKQoQRwiKmiI6UvMBhzFbHP6XIs56yjE+JPiArpQKRrZGVtQU5zSIXePiWMv0EySj3RThCABQC9mdIOVo8JY1kVrMMWi1+KCdkBMJQCyRzj4WIvJQorxcTqWUPosk1J6SmGqWuS8-J7zin8K+UI0ejQgA",
  },
  {
    name: "Password Buddy",
    description:
      "Web-based password manager that stores passwords in the cloud. Utilizes AES encryption and session tokens to secure credentials and prevent unauthorized access. Supports visibility options for ease of use.",
      tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: PasswordBuddyImg,
    source_code_link: "https://github.com/kmanikon/Password-Manager",
    linkUrl: "https://password-buddy.vercel.app/",
  },
  {
    name: "Bug Tracker",
    description:
      "Project management tool tailored for developer teams. Features include a bulletin board, interactive user metrics, user management, real-time notifications, and a rollback feature that allows admins to undo previous changes.",
    tags: [
      {
        name: "ASP.NET",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      
    ],
    image: BugTrackerImg,
    source_code_link: "https://github.com/kmanikon/Bug-Tracker",
    linkUrl: "https://bug-tracker-km.vercel.app/login",
  },
  {
    name: "Quake Search",
    description:
      'Website for visualizing earthquake data collected by the US Geological Survey.',
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Quakes_Page,
    source_code_link: 'https://github.com/kmanikon/Quakes_Updated',
    linkUrl: 'https://quakes-peach.vercel.app/home',
  },
];
/*
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
*/


const Work = () => {

    // projects file
    //const project = data;
    //setProject(data);

    const ProjectCard = ({
      index,
      name,
      description,
      tags,
      image,
      source_code_link,
      linkUrl
    }) => {
      return (
        <div
            className='bg-tertiary bg-[#00000061] p-5 rounded-2xl sm:w-[360px] w-full' style={{border: '1px solid white'}}
          >            
            <div className='relative w-full h-[230px]'>

                <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                 <img
                  src={image}
                  alt='project_image'
                  className='w-full h-full object-cover rounded-2xl'
                  style={{zIndex: -1}}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out font-bold"
                >
                  Go To Project
                </div>
                </a>
    
              
              <div className='absolute right-0 top-0 flex justify-end m-3 card-img_hover w-10 h-10 '>
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-[black]'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-5/6 h-5/6 object-contain'
                    style={{zIndex: 30}}
                  />
                </div>
              </div>
              
            </div>
    
            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>{name}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>
    
            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  {tag.name}
                </p>
              ))}
            </div>
            </div>
      );
    };

    const ProjectList = () => {

      return (
        <div className="min-w-[100%] ontainer flex flex-wrap gap-4 justify-center">
            <ProjectCard key={`project-${1}`} index={1} {...projects[0]} />
            <ProjectCard key={`project-${2}`} index={2} {...projects[1]} />
            <ProjectCard key={`project-${3}`} index={3} {...projects[2]} />
            <ProjectCard key={`project-${4}`} index={4} {...projects[3]} />
        </div>
      );
    };
  
  return (
    <div>

      <div name='work' className='pb-40 w-full h-auto bg-[#0a192f] text-gray-300 py-12'>
        {/* Container */}
        <div className='pt-10 max-w-[100%] mx-auto p-4 flex flex-col justify-center'>
          <div className="text-center">
            <p className='text-4xl font-bold'>Personal Projects</p>
            <p className='py-4'></p>
          </div>
          
          <div>
            <ProjectList />
          </div>
        </div>
      </div>
    
      {/*}
      <div>
      <div name='work' className='w-full bg-[#0a192f] text-gray-300'>
        <div className='pt-20 '>
            <div>
                <p className='text-4xl font-bold  flex justify-center'>Projects</p>
                <p className='py-4'></p>
            </div>
          
  
          <div>
  
          <div >

          <div className="min-w-[100%] ontainer flex flex-wrap gap-4 justify-center">
            

              <ProjectCard key={`project-${1}`} index={1} {...projects[0]} />
              <ProjectCard key={`project-${2}`} index={2} {...projects[1]} />
              <ProjectCard key={`project-${3}`} index={3} {...projects[2]} />
          </div>
              {/*
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
      
  
      </div>
      */}
      </div>
  );
};

export default Work;
