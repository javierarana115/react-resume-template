import {AcademicCapIcon, ArrowDownTrayIcon, BuildingOffice2Icon, CalendarIcon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline'; // External library (heroicons)
import * as React from 'react'; // External library (React)

// Custom icons
import AWSIcon from '../../public/icons/AWSIcon';
import AzureIcon from '../../public/icons/AzureIcon';
import ExcelIcon from '../../public/icons/ExcelIcon';
import JiraIcon from '../../public/icons/JiraIcon';
import MatplotlibIcon from '../../public/icons/MatplotlibIcon';
import PowerAutomateIcon from '../../public/icons/PowerAutomateIcon';
import PowerBIIcon from '../../public/icons/PowerBIIcon';
import PythonIcon from '../../public/icons/PythonIcon';
import ScikitIcon from '../../public/icons/ScikitIcon';
import SeabornIcon from '../../public/icons/SeabornIcon';
import SQLIcon from '../../public/icons/SQLIcon';
import TableauIcon from '../../public/icons/TableauIcon';
// Other imports
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
// Types
import {About, ContactSection, ContactType, Hero, HomepageMeta, PortfolioItem, SkillGroup, Social, TimelineItem} from './dataDef';


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Javier Arana',
  description: "Javier Arana portfolio website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `Javier Arana`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I’m passionate about turning complex data into clear, actionable insights that support smarter business decisions. With experience in data wrangling, dashboard development, and cloud tools, I specialize in delivering analytics solutions that drive real results.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I enjoy working with Python, SQL, Power BI, and Tableau to uncover trends, build reports, and streamline data processes. Outside of work, you’ll find me climbing, training in the gym, or exploring new places.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Javier%20Arana%20Resume%20-%202025.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m a recent graduate from George Mason University with a passion for learning new technologies, taking initiative, and leading teams. As president of GMU Students Helping Honduras, I gained hands-on leadership experience, and I actively participated in tech-focused organizations like Tech for Good to stay engaged with emerging trends and collaborative projects.`,
  aboutItems: [
    {label: 'Location', text: 'Woodbridge', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Honduras/USA', Icon: FlagIcon},
    {label: 'Interests', text: 'Climbing, Technology, Traveling', Icon: SparklesIcon},
    {label: 'School', text: 'George Mason University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Raben', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Data Cleanup',
    skills: [
      {
        name: 'Python',
        icon: PythonIcon,
      },
      {
        name: 'SQL',
        icon: SQLIcon,
      },
      {
        name: 'Excel',
        icon: ExcelIcon
      },
    ],
  },
  {
    name: 'Data Visualization',
    skills: [
      {
        name: 'Power BI',
        icon: PowerBIIcon,
      },
      {
        name: 'Tableau',
        icon: TableauIcon,
      },
      {
        name: 'Matplotlib',
        icon: MatplotlibIcon,
      },
      {
        name: 'Seaborn',
        icon: SeabornIcon
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'scikit-learn',
        icon: ScikitIcon,
      },
    ],
  },
  {
    name: 'Cloud Technologies',
    skills: [
      {
        name: 'AWS',
        icon: AWSIcon
      },
      {
        name: 'Azure',
        icon: AzureIcon,
      },
    ],
  },
  {
    name: 'Miscellaneous',
    skills: [
      {
        name: 'Power Automate',
        icon: PowerAutomateIcon,
      },
      {
        name: 'Jira',
        icon: JiraIcon,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Smarbin',
    description: 'Won First place $600 prize award. Created a trash bin that used a ML model to automatically sort items into recycling and trash and displayed a dashboard for the user to see their statistics.',
    url: 'https://devpost.com/software/smarbin?_gl=1*1htxkmu*_gcl_au*NzE3NTIzMDY3LjE3NDQ1MjM2NDk.*_ga*NDM5MjgxNjg4LjE3NDQ1MjM2NDk.*_ga_0YHJK3Y10M*MTc0NDUyMzY0OC4xLjEuMTc0NDUyMzY2NC4wLjAuMA..',
    image: porfolioImage4,
  },
  {
    title: 'Nexus Care',
    description: 'Won the $2,500 prize award. Created a prototype for an electronic health record internal AI assistant. Presented business plan and ideas with a live demo on stage to a group of judges. Utilized OpenAI’s GPT-4 Turbo API and React.',
    url: 'https://www.patientsafetytech.com/past-competitions/h2ai',
    image: porfolioImage1,
  },
  {
    title: 'PatriotPath',
    description: 'Won the Microsoft x Cloudforce track at PatriotHacks. Created a full stack College Career web application implementing Microsoft Azure products such as Azure OpenAI GPT-4o, Azure VM, and deployed on Azure App Services.',
    url: 'https://www.instagram.com/p/DBPk1d1yGEl/',
    image: porfolioImage2,
  },
  {
    title: 'Laptop Refurbishing',
    description: 'Helped refurbish laptops that were donated to local public school kids.',
    url: 'https://idia.gmu.edu/gmu-va-star/',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected May 2025',
    location: 'George Mason University',
    title: "Bachelor's of Science, Management Information Systems",
    content: <p><strong className="text-stone-600 font-bold">Related Courses include:</strong> Programming for Analytics, Cloud Computing Essentials, Database Management Systems, Introduction to Programming for Business Applications, Networks and Security, Business Analytics II</p>,
  },
  {
    date: 'August 2023',
    location: 'Northern Virginia Community College',
    title: "Associate's of Science, Business Administration",
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Washington, DC | January 2025 – Present',
    location: 'Raben',
    title: 'Business Operations Intern',
    content: (
      <p>
        Assisted in the deployment and customization of a CRM system within a 3-month period, aligning it with business
        requirements and improving data management and customer engagement processes.<br /><br />
        Utilized Pandas to clean and manipulate data for seamless CRM entry, enhancing data quality and usability.
      </p>
    ),
  },
  {
    date: 'Fairfax, VA | January 2025 – Present',
    location: 'EngineeRD',
    title: 'Digital Transformation Extern',
    content: (
      <p>
        Used Agile methodologies to plan, gather requirements, design, implement, test, and deploy a solution automating their
        business processes through custom Microsoft Copilot AI agents.<br /><br />
        Drove a 30% increase in sales opportunities by implementing AI-powered automation, streamlining lead generation and
        customer engagement processes.
      </p>
    ),
  },
  {
    date: 'Fairfax, VA | May 2024 – November 2024',
    location: 'C&R Software',
    title: 'Functional Consultant Intern',
    content: (
      <p>
        Created an automated tool for comparing software configurations, cutting analysis time by 92%. Documented and
        deployed it across multiple teams.<br /><br />
        Created Power BI dashboards to analyze team productivity through billable hours tracking and enhance project
        oversight, driving data-informed decision-making.<br /><br />
        Improved efficiency with cross-functional teams by creating, assigning, and monitoring Jira issues.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'These are the best methods to get in contact with me.',
  items: [
    {
      type: ContactType.Email,
      text: 'javierarana115@gmail.com',
      href: 'mailto:javierarana115@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '(703) 475-8015',
      href: 'callto:+1-703-475-8015',
    },
    {
      type: ContactType.Location,
      text: 'Woodbridge, VA',
      href: 'https://www.google.com/maps/place/Woodbridge,+VA',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/javier-arana-674a8b2a7/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/javierarana115'},
];
