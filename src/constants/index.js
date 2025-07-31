import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    spring,
    css,
    reactjs,
    django,
    python,
    tailwind,
    nodejs,
    PostgreSQL,
    git,
    java,
    docker,
    CACI,
    ME,
    CarAI,
    movieApp,
    RxApp,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: PostgreSQL,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern - Sterling, VA",
      company_name: "CACI International Inc.",
      icon: CACI,
      iconBg: "#383E56",
      date: "May 2024 - August 2025",
      points: [
        "Developed full-stack features for a satellite tasking and scheduling application used in government operations.",
        "Built a 3D Cesium globe and 2D LeafletJS map interface for real-time satellite tracking and visualization.",
        "Implemented scheduling algorithms using ephemeris and TLE data to identify ground station access windows.",
        "Built and documented RESTful APIs, integrating Spring Boot backend with PostgreSQL and React UI.",
        "Leveraged Orekit for orbital calculations and GitLab CI/CD pipelines for automated deployment and testing",
        "Worked in a 19-member Agile team, contributing to standups, sprint planning, and retrospectives.",
        "Presented final deliverables to stakeholders and received positive feedback for clarity and performance.",
      ],
    },
    {
      title: "Software Engineer Intern - Tokyo, Japan",
      company_name: "Me Learning Ltd.",
      icon: ME,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Enhanced backend for e-learning platform (bokoco.com) used by Japanese students learning English.",
        "Designed and implemented RESTful APIs and server-side components using Python and PostgreSQL.",
        "Optimized database queries, increasing system performance by 10%.",
        "Engaged in Agile standups, Git-based version control, and CI/CD workflows to improve dev efficiency.",
        "Supported cross-team communication between developers, designers, and PMs.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Car Parts Search with Ai",
      description:
        "An intelligent automotive parts identification system that uses computer vision, OCR, and machine learning to identify car parts from photos and help users find where to purchase them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "OCR",
          color: "pink-text-gradient",
        },
        {
          name: "ComputerVision",
          color: "orange-text-gradient",
        },
      ],
      image: CarAI,
      source_code_link: "https://github.com/mywajdi123/car-part-searcher-with-Ai",
    },
    {
      name: "Netflix Style Movie Discovery Platform",
      description:
        "A modern, Netflix inspired movie discovery application built with React, featuring glassmorphism design, real time search, and trending analytics powered by TMDB API and Appwrite.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Appwrite",
          color: "pink-text-gradient",
        },
         {
          name: "API's",
          color: "orange-text-gradient",
        },
      ],
      image: movieApp,
      source_code_link: "https://github.com/mywajdi123/movie-react-app",
    },
    {
      name: "Pharmacy Shipping Management App",
      description:
        "Web application designed to help pharmacies track cold chain medication shipments end to end with a 3 step process: create med shipment, price and shipment details, and review to submit.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: RxApp,
      source_code_link: "https://github.com/mywajdi123/Pharmacy-Shipping-Tracker/tree/main",
    },
  ];
  
  export { services, technologies, experiences, projects };