import React from 'react';

const EDUrainExperienceList = [
  'Responsible for end-to-end development of a messaging feature as the primary developer. Responsibilities include creating and maintaining design documentation, designing a responsive UI, writing unit tests, developing the frontend, and integrating a Firebase backend into an existing microservice architecture',
  'Assisted Senior developers in fixing bugs and resolving production issues in weekly coding sessions',
  'Tools Used: React JS, Next.js, GraphQL, Firebase, AWS, TypeScript, JavaScript, Tailwind CSS, Git'
]

const HiddenExperienceList = [
  'Helped develop a scalable travel platform that matches users with local businesses, employing cross-platform tools to design, implement, and refine full-stack application features for both Android and iOS environments',
  'Responsible for integrating single sign-on authentication support, implementing multi-factor authentication, and incorporating privacy-by-design principles to ensure compliance with data protection requirements',
  'Achieved high test coverage on the frontend, streamlining development and improving code maintainability',
  'Created CI/CD pipelines to automate the build, testing, and deployment processes across multiple platforms',
  'Tools Used: React Native, Node.js, Jenkins, JavaScript, React Native Testing Library, Figma Wireframes, Git'
]

const ISAExperienceList = [
  'Created a mobile app that helps farmers identify defective fruit in crop yields, utilizing Java and TFLite to integrate ML models trained by compiling 85,000 images & leveraging OpenCV to automate image labeling',
  "Collaborated with two students to develop an informed search algorithm that outperformed conventional methods in playing the New York Times 'Spelling Bee' game, demonstrating an 87% improvement over DFS",
  "Tools Used: Java, Python, OpenCV, PyTorch, TFLite, Jupyter Notebook, Git"
]

const AlongComesHopeExperienceList = [
  'Developed the frontend for a Software as a Service platform, integrating third party APIs, implementing responsive design, and collaborating with backend developers to integrate business logic into the application',
  'Tools Used: React JS, JavaScript, HTML / CSS, Git'
]


const About = () => {

  const ExperienceBullet = ({ bullet }) => {
    return (
      <div>
        <p>{bullet}</p>
        <p className='py-2'></p>
      </div>
    );
  };

  return (
    <div>
    <div name='about' className='pb-40 w-full bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
              {/*<p className='py-4'>// These are the technologies I've worked with</p>*/}
              <p className='py-4'></p>
          </div>
        

        <div>




        {/*
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className="my-0 leading-3">EDUrain</p>
              <p className='text-[#8892b0] py-4 max-w-[700px] text-xl my-0 leading-7'>
                <div>Software Engineer Intern</div>
                <div>Sept 2023 - Present</div>
              </p>

            </div>
            <div>
              <ExperienceBullet bullet={"(ongoing)"}/>
              
            </div>
          </div>
        
        <p className="my-7"></p>
        */}



        

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className="my-0 leading-3">Hidden</p>
              <p className='text-[#8892b0] py-4 max-w-[700px] text-xl my-0 leading-7'>
                <div>Software Developer</div>
                <div>Jan 2023 - Sept 2023</div>
              </p>

            </div>
            <div>
              <ExperienceBullet bullet={HiddenExperienceList[0]}/>
              <ExperienceBullet bullet={HiddenExperienceList[1]}/>
              <ExperienceBullet bullet={HiddenExperienceList[2]}/>
              <ExperienceBullet bullet={HiddenExperienceList[3]}/>
              <ExperienceBullet bullet={HiddenExperienceList[4]}/>
              <ExperienceBullet bullet={HiddenExperienceList[5]}/>
              

            </div>
          </div>

        </div>

        <p className="my-7"></p>


        <div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className="my-0 leading-3">Cal Poly Corporation</p>
              <p className='text-[#8892b0] py-4 max-w-[700px] text-xl my-0 leading-7'>
                <div>Instructional Student Assistant</div>
                <div>Oct 2022 - Present</div>
              </p>

            </div>
            <div>
              <ExperienceBullet bullet={ISAExperienceList[0]}/>
              <ExperienceBullet bullet={ISAExperienceList[1]}/>
              <ExperienceBullet bullet={ISAExperienceList[2]}/>
            </div>
          </div>

        </div>

        <p className="my-7"></p>


        <div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className="my-0 leading-3">Along Comes Hope</p>
              <p className='text-[#8892b0] py-4 max-w-[700px] text-xl my-0 leading-7'>
                <div>Software Developer Intern</div>
                <div>June 2022 - Aug 2022</div>
              </p>

            </div>
            <div>
              <ExperienceBullet bullet={AlongComesHopeExperienceList[0]}/>
              <ExperienceBullet bullet={AlongComesHopeExperienceList[1]}/>
            </div>
          </div>


          

        </div>


        

      </div>
    </div>
{/*
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Experience
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hidden</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
    */}
    </div>
  );
};

export default About;
