import styles from '../styles/ExperienceTab.module.css';
import ATTIcon from '../assets/companyIcons/ATT.png';
import EDUrainIcon from '../assets/companyIcons/EDUrain.jpg';
import HiddenIcon from '../assets/companyIcons/Hidden.jpeg';
import CalPolyIcon from '../assets/companyIcons/CalPoly.jpg';
import AlongComesHopeIcon from '../assets/companyIcons/AlongComesHope.jpeg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'AT&T Services',
    date: 'July 2024 - Present',
    points: [
      'Proposed and led implementation of an efficient in-memory caching strategy to optimize Snowflake request handling, improving application performance and cutting database load by ~10%. Expanded functionality to automate client onboarding tasks, driving $185,000 in annual cost savings and operational benefits',
      'Identified critical bottlenecks in application infrastructure and developed a parallel data streaming solution that increased capacity and improved response times by 40% on a key Node.js service, saving a projected 45,000 user-minutes annually. Enabled the team to optimize Snowflake costs, leading to $120,000 in savings',
      'Led UI-UX initiatives during MVP development, stepping into a frontend developer role with React JS to fill project needs. Collaborated with stakeholders to design Figma prototypes encompassing the project scope, securing client approval in August 2024 and keeping the team on track to meet the 2024 Q4 delivery timeline',
      'Proactively identified service resiliency challenges and designed a solution automating server restarts, crash prevention, and Snowflake access recovery on a Node.js API server. This greatly improved system reliability, allowing the team to eliminate a recurring maintenance window and saving the company $90,000 annually',
      'Served as the primary developer overseeing end-to-end integration with AT&T’s global logon and Halo OIDC authentication, achieving a key security milestone and enabling the start of user testing. Proposed and led implementation of an Azure API gateway to enhance security and streamline access management across services, enabling faster user onboarding and allowing real-time monitoring for rapid incident response',
      'Conducted 30+ technical interviews for software engineer candidates in the 2024-25 hiring cycle, evaluating coding and system design skills, providing detailed feedback, and driving informed hiring decisions',
      'Tools Used: React JS, Node.js, Express.js, Snowflake, Azure Cloud, Figma, Git, Javascript, HTML / CSS',
    ],
  },
  {
    title: 'Software Engineer (Contract)',
    company_name: 'EDUrain',
    date: 'September 2023 - July 2024',
    points: [
      'Joined a Series-A startup as the second full-time hire. Responsible for full-stack development on a live web service, implementing core site features using Next.js, Node.js, and Firebase. Delivered key functionality that supported rapid user adoption, helping scale the platform to 10,000+ active users within six months of launch',
      'Led a site-wide initiative to streamline mobile responsiveness in the flagship Next.js site, greatly improving the mobile experience, driving a 43% rise in mobile traffic in Q1 2024 and a 26% increase in overall usership',
      'Developed a Node.js microservice for tracking user payments and processing rental data for external clients. Worked with clients to meet data format specifications and ensure smooth integration with existing services',
      'Acted as the primary client contact over a span of six months, providing technical updates in stakeholder meetings to maintain alignment between technical progress, business goals, and stakeholder expectations',
      'Tools Used: React JS, Next.js, Node.js, Express.js, GCP Firestore, TypeScript, Git',
    ],
  },
  {
    title: 'Software Developer Intern',
    company_name: 'Hidden',
    date: 'January 2023 - September 2023',
    points: [
      'Developed core site features for a scalable SaaS platform, leveraging cross-platform tools to design, implement, and refine full-stack functionality and enhance the user experience across both Android and iOS',
      'Implemented a real-time messaging feature, facilitating in-app communication to boost user engagement. Utilized a websocket based approach to sync user state and provide users with a real-time chat experience',
      'Tools Used: React Native, Node.js, JavaScript, React Native Testing Library, Figma, Git',
    ],
  },
  {
    title: 'Research Assistant',
    company_name: 'Cal Poly Corporation',
    date: 'October 2022 - December 2023',
    points: [
      'Developed an embedded system integrating ML object detection, contributing to model training and optimization. Automated development workflows, enabling MVP implementation and launch in Jan 2024',
      'Tools Used: Java, Python, OpenCV, PyTorch, TFLite, Jupyter Notebook, Git',
    ],
  },
];

export default function ExperienceTab({ mobile = false }) {
  return (
    <div className={styles.wrapper}>
      

      <VerticalTimeline layout={'1-column'}>
        {experiences.map((experience, index) => {
          const name = experience.company_name.toLowerCase();
          let iconSrc = null;
          if (name.includes('at&t') || name.includes('att')) iconSrc = ATTIcon;
          else if (name.includes('edurain')) iconSrc = EDUrainIcon;
          else if (name.includes('hidden')) iconSrc = HiddenIcon;
          else if (name.includes('cal poly')) iconSrc = CalPolyIcon;
          else if (name.includes('along')) iconSrc = AlongComesHopeIcon;

          return (
            <VerticalTimelineElement
              key={`${experience.company_name}-${index}`}
              contentStyle={{ background: 'transparent', color: '#fff' }}
              contentArrowStyle={{ display: 'none' }}
              iconStyle={{ background: 'transparent', boxShadow: 'none' }}
              icon={
                iconSrc ? (
                  <div className={styles.iconWrapper}>
                    <img
                      src={iconSrc}
                      alt={experience.company_name}
                      className={styles.companyIcon}
                      style={{ clipPath: 'circle()' }}
                    />
                  </div>
                ) : null
              }
            >
              <div>
                <h3 className={styles.cardTitle}>{experience.title}</h3>
                <p className={styles.companyName} style={{ margin: 0 }}>{experience.company_name}</p>
                <p className={styles.date}>{experience.date}</p>
              </div>

              <ul className={styles.points}>
                {experience.points.map((point, pointIndex) => (
                  <li key={`${index}-point-${pointIndex}`} className={styles.point}>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
