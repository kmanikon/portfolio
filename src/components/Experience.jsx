import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles/ExperienceStyles";
//import { experiences } from "../constants";
import { SectionWrapper } from "./SectionWrapper";
import { textVariant } from "../utils/motion.jsx";

import EDUrain from '../assets/companyIcons/EDUrain.jpg';
import Hidden from '../assets/companyIcons/Hidden.jpeg';
import CalPoly from '../assets/companyIcons/CalPoly.jpg';
import AlongComesHope from '../assets/companyIcons/AlongComesHope.jpeg';

const experiences = [
    {
      title: "Software Engineer",
      company_name: "EDUrain",
      icon: EDUrain,
      iconBg: "#fff",
      date: "December 2023 - Present",
      points: [
        "Responsible for full-stack development on a live web service, delivering end-to-end implementation of additional features and iterations. Responsibilities include creating design documentation, designing a responsive UI, developing the frontend, and integrating backend services into a microservice architecture",
        "Architected, designed, and implemented a service for automating rental background checks as the primary developer. This feature became a paid service, contributing 6% of the company’s revenue in May 2024",
        "Led efforts to streamline mobile responsiveness across the site, significantly improving the mobile user experience. This initiative directly led to a 43% growth in mobile traffic between Dec 2023 and June 2024",
        "Helped conduct technical interviews to assess candidate skills and was responsible for delivering regular tech updates during investor meetings, ensuring alignment between technical progress and business objectives",
        "Tools Used: React JS, Next.js, Node.js, Express.js, Firebase, AWS, TypeScript, JavaScript, Tailwind CSS, Git"

      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "EDUrain",
      icon: EDUrain,
      iconBg: "#fff",
      date: "September 2023 - December 2023",
      points: [
        "Developed a microservice for monitoring user payments and processing rental data for external clients. Worked with clients to meet data format specifications and ensure smooth integration with existing services",
        "Implemented a real-time messaging feature, facilitating in-app communication and boosting user engagement. Utilized a websocket based approach to sync user state and provide users with a real-time chat experience",
        "Configured a non-prod testing environment in AWS, streamlining deployment and facilitating test automation",
        "Tools Used: React JS, Next.js, Node.js, Express.js, Firebase, AWS, TypeScript, JavaScript, Tailwind CSS, Git"

      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Hidden",
      icon: Hidden,
      iconBg: "#fff",
      date: "January 2023 - September 2023",
      points: [
        "Helped develop a scalable travel platform that matches users with local businesses, employing cross-platform tools to design, implement, and refine full-stack application features for both Android and iOS environments",
        "Responsible for integrating single sign-on authentication support, implementing multi-factor authentication, and incorporating privacy-by-design principles to ensure compliance with data protection requirements",
        "Tools Used: React Native, Node.js, JavaScript, React Native Testing Library, Figma Wireframes, Git"

      ],
    },
    {
      title: "Research Assistant",
      company_name: "Cal Poly Corporation",
      icon: CalPoly,
      iconBg: "#fff",
      date: "October 2022 - December 2023",
      points: [
        "Developed a camera system that helps farmers at a local vineyard identify defective grapes using ML and computer vision. Created scripts to automate development bottlenecks to facilitate implementation of an MVP",
        "Tools Used: Java, Python, OpenCV, PyTorch, TFLite, Jupyter Notebook, Git"

      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Along Comes Hope",
      icon: AlongComesHope,
      //iconBg: "#E6DEDD",
      iconBg: "#fff",
      date: "June 2022 - August 2022",
      points: [
        "Developed the frontend for a Software as a Service platform, integrating third party APIs, implementing responsive design, and collaborating with backend developers to incorporate RESTful services into the app",
        "Tools Used: React JS, JavaScript, HTML / CSS, Git"

      ],
    },
  ];
  
  /*
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  */
  

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0a192f",
        //borderRadius: 0
        //color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[100%] h-[100%] object-contain'
            style={{clipPath: 'circle()'}}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {



  return (
    <>
    <div name='about' className=' pb-40 w-full bg-[#0a192f] text-gray-300'>
        {/*
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      max-w-[95vw] 
      */}
     <div className='mx-auto flex flex-col justify-center w-full'>

      <p className='pt-20 mx-auto text-4xl font-bold flex justify-center'>Experience</p>

    

        
      <div className='mt-14 flex flex-col'>
        <VerticalTimeline layout={'2-columns'}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
      </div>
    </>
  );
};

export default Experience;
