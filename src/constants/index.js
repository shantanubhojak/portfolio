import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    cloudMatic,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Software Developer",
      icon: web,
    },
    {
      title: "SalesForce Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Graduate Engineer Trainee- Salesforce",
      company_name: "CloudMatic Soultions",
      icon: cloudMatic,
      iconBg: "#E6DEDD",
      date: "June 2023 - November 2023",
      points: [
        "Created a Lightning web component for deleting and merging duplicate records of different objects, saving 100% costs compared to a charged services.",
        "Orchestrated the development of Apex automation components like Flows and Triggers, ensuring comprehensive test coverage in the environment and yielding a 10% increase in test efficiency and 20% reduction in bugs detected.",
        
      ],
    },
    {
      title: "Software Developer - Salesforce",
      company_name: "CloudMatic Soultions",
      icon: cloudMatic,
      iconBg: "#383E56",
      date: "November 2023 - present",
      points: [
        "Implemented integration between Salesforce and Zoho CRM, as well as Salesforce and Hubspot CRM, to establish two-way synchronization.",
        "Responsible for designing and implementing Automation Components to automate business processes and improve efficiency.",
        "Implemented caching functionality using the Lightning Data Service in a Lightning Web Component, resulting in a reduction of up to 20% in server fetching time.",
        "Developed a retry mechanism that automatically executes at specified intervals if an API method call encounters an exception with the help of scheduled , batch Apex class.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it is Difficult to make a website as beautiful as our product, but Piyush proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Piyush does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Piyush optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "GO FOOD",
      description:
        " Full-Stack Food Delivery Application: Developed using the MERN stack (MongoDB, Express, React.js, Node.js). Built responsive and user-friendly interfaces with React.js. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/shantanubhojak/GoFood",
    },
    {
      name: "BRAIWARE",
      description:
        "Designed and developed the landing page using React and Tailwind CSS. Focused on building a responsive and visually appealing user interface with smooth interactions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/shantanubhojak/Brainware",
    },
    {
      name: "MOVIE DATABASE",
      description:
      "Designed a web application that suggests movies based on user preferences. Utilized HTML, CSS, and JavaScript, integrating an API to dynamically update the movie list..",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/shantanubhojak/1500",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
