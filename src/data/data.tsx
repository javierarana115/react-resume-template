import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

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
  Stats: 'stats',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Javier Arana.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a George Mason <strong className="text-stone-100">Management Information Systems </strong>student. I'm hoping to break into the <strong className="text-stone-100">Data Analytics/Data Science</strong> industry.
        I thrive on transforming raw data into <strong className="text-stone-100">actionable insights</strong> that drive <strong className="text-stone-100">decision-making</strong>. Whether it’s building predictive models, creating interactive dashboards, or exploring the latest trends in machine learning, I am constantly inspired by the power of data to shape the <strong className="text-stone-100">future</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me climbing or hiking <strong className="text-stone-100">mountains</strong>,
         getting strong at the <strong className="text-stone-100">gym</strong>, or having new experiences{' '}
        <strong className="text-stone-100">traveling</strong>.
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
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
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
        level: 9,
      },
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'Excel',
        level: 10,
      },
    ],
  },
  {
    name: 'Data Visualization',
    skills: [
      {
        name: 'Power BI',
        level: 9,
      },
      {
        name: 'Tableau',
        level: 6.5,
      },
      {
        name: 'Matplotlib',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nexus Care',
    description: 'Won $2500 prize at Georgetown AI Healthcare hackathon.',
    url: 'https://www.patientsafetytech.com/past-competitions/h2ai',
    image: porfolioImage1,
  },
  {
    title: 'PatriotPath',
    description: 'Won 3rd place Microsoft x Cloudforce prize.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Laptop Refurbishing',
    description: 'Helped refurbish laptops that were donated to public school kids.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
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
