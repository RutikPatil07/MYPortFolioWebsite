import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaObjectGroup, FaBimobject } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap','React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['SpringBoot', 'REST APIs' , 'Hibernate/JPA' ,'Node.js', 'Django',]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Programming',
    icon: FaMobileAlt,
    description: 'Skilled in developing logical, efficient and well-structured software applications.',
    tags: ['JAVA', 'OOPs', 'JDBC', 'JSP/Servlets']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Postman', 'Vs Code', 'Maven', 'Spring Tool Suite']
  },
   {
    title: 'Others',
    icon: FaCode,
    description: 'Strong understanding of modern software development concepts and industry-standard development practices.',
    tags: ['JSON', 'MVC Architecture', 'API Integration', 'Agile', 'SDLC']
  }
];



export const projects = [
  {
    title: "Routing DOM Project",
    description: "I developed a RouteDemo project to practice modern frontend development and routing concepts.This Project Focuses on displaying data,adding new data, updating existing data, and deleting data, along with Smooth naviagtion between pages..",
    image: projectImg1,
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Backend Application",
    description: "I developed a backend application using SpringBoot and PostgreSQL to gain hands-on experience in backend development.Built REST APIs using REST contollers.Performed CRUD operations with Spring Data JPA & Hibernate.",
    image: projectImg2,
    tech: ["SpringBoot", "PostgreSQL","JPA/Hibernate","Swagger UI"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Calculator",
    description: "I built it with a clean, responsive design and all the basic arithmetic functionality.It was great way to deepen my understanding of DOM manipulation and Responsive Layouts.Responsive and visually engaging UI.Performs arithmetic Operations.",
    image: projectImg3,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Expence App",
    description: "This application allows users to login and manage their financial transactions by adding credit and debit entries, making it easier to track expenses and balance.",
    image: projectImg5,
    tech: ["React", "html5", "CSS3"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "Music Website",
    description: "I developed music website clone using HTML5 structure & semantic elements.Responsive web design with CSS3.Page layout using Flexbox & grid.",
    image: projectImg6,
    tech: ["HTML5", "CSS3", "Flexbox", "Grid"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Software Developer",
    company: "Hummingbyte Technologies",
    duration: "May 2025- Jan 2026 ",
    description:
      "Contributed to the development of scalable web applications by working on both frontend and backend technologies.Assisted in building REST APIs, optimizing database queries, and enhamcing application performance.Collaborated with the development team in-time project implementation.",
    color: "purple"
  }
];
