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

import ATT from '../assets/companyIcons/ATT.png';
import EDUrain from '../assets/companyIcons/EDUrain.jpg';
import Hidden from '../assets/companyIcons/Hidden.jpeg';
import CalPoly from '../assets/companyIcons/CalPoly.jpg';
import AlongComesHope from '../assets/companyIcons/AlongComesHope.jpeg';

const experiences = [
    {
      title: "Software Engineer",
      company_name: "AT&T Services",
      icon: ATT,
      iconBg: "#fff",
      date: "July 2024 - Present",
      points: [  
        "Proposed and led implementation of an efficient in-memory caching strategy to optimize Snowflake request handling, improving application performance and cutting database load by ~10%. Expanded functionality to automate client onboarding tasks, driving $185,000 in annual cost savings and operational benefits",
        "Identified critical bottlenecks in application infrastructure and developed a parallel data streaming solution that increased capacity and improved response times by 40% on a key Node.js service, saving a projected 45,000 user-minutes annually. Enabled the team to optimize Snowflake costs, leading to $120,000 in savings",
        "Led UI-UX initiatives during MVP development, stepping into a frontend developer role with React JS to fill project needs. Collaborated with stakeholders to design Figma prototypes encompassing the project scope, securing client approval in August 2024 and keeping the team on track to meet the 2024 Q4 delivery timeline",
        "Proactively identified service resiliency challenges and designed a solution automating server restarts, crash prevention, and Snowflake access recovery on a Node.js API server. This greatly improved system reliability, allowing the team to eliminate a recurring maintenance window and saving the company $90,000 annually",
        "Served as the primary developer overseeing end-to-end integration with AT&T’s global logon and Halo OIDC authentication, achieving a key security milestone and enabling the start of user testing. Proposed and led implementation of an Azure API gateway to enhance security and streamline access management across services, enabling faster user onboarding and allowing real-time monitoring for rapid incident response",
        "Conducted 30+ technical interviews for software engineer candidates in the 2024-25 hiring cycle, evaluating coding and system design skills, providing detailed feedback, and driving informed hiring decisions",
        "Tools Used: React JS, Node.js, Express.js, Snowflake, Azure Cloud, Figma, Git, Javascript, HTML / CSS"
      ],
    },
    {
      title: "Software Engineer (Contract)",
      company_name: "EDUrain",
      icon: EDUrain,
      iconBg: "#fff",
      date: "September 2023 - July 2024",
      points: [  
        "Joined a Series-A startup as the second full-time hire. Responsible for full-stack development on a live web service, implementing core site features using Next.js, Node.js, and Firebase. Delivered key functionality that supported rapid user adoption, helping scale the platform to 10,000+ active users within six months of launch",
        "Led a site-wide initiative to streamline mobile responsiveness in the flagship Next.js site, greatly improving the mobile experience, driving a 43% rise in mobile traffic in Q1 2024 and a 26% increase in overall usership",
        "Developed a Node.js microservice for tracking user payments and processing rental data for external clients. Worked with clients to meet data format specifications and ensure smooth integration with existing services",
        "Acted as the primary client contact over a span of six months, providing technical updates in stakeholder meetings to maintain alignment between technical progress, business goals, and stakeholder expectations",
        "Tools Used: React JS, Next.js, Node.js, Express.js, GCP Firestore, TypeScript, Git"
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Hidden",
      icon: Hidden,
      iconBg: "#fff",
      date: "January 2023 - September 2023",
      points: [
        "Developed core site features for a scalable SaaS platform, leveraging cross-platform tools to design, implement, and refine full-stack functionality and enhance the user experience across both Android and iOS",
        "Implemented a real-time messaging feature, facilitating in-app communication to boost user engagement. Utilized a websocket based approach to sync user state and provide users with a real-time chat experience",
        "Tools Used: React Native, Node.js, JavaScript, React Native Testing Library, Figma, Git"
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Cal Poly Corporation",
      icon: CalPoly,
      iconBg: "#fff",
      date: "October 2022 - December 2023",
      points: [
        "Developed an embedded system integrating ML object detection, contributing to model training and optimization. Automated development workflows, enabling MVP implementation and launch in Jan 2024",
        "Tools Used: Java, Python, OpenCV, PyTorch, TFLite, Jupyter Notebook, Git"

      ],
    },
    /*
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
    */
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

      <p className='pt-20 mt-2 mx-auto text-4xl font-bold flex justify-center'>Experience</p>

    

        
      <div className="experienceSpacing">
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
