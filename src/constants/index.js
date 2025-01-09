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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Web Developement",
      company_name: "'GoFood' Food Delivery App",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2024 - June 2024",
      points: [
        "Full-Stack Food Delivery Application: Developed using the MERN stack (MongoDB, Express, React.js, Node.js).",
        "Built responsive and user-friendly interfaces with React.js.",
        "Managed efficient database operations and data handling using MongoDB.",
        "Enhanced proficiency in full-stack development and deepened understanding of the MERN ecosystem.",
      ],
    },
    {
      title: "Web Developement",
      company_name: "Brain ware AI Chatting App",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "july 2024 - aug 2024",
      points: [
        "Designed and developed the landing page using React and Tailwind CSS.",
        "Focused on building a responsive and visually appealing user interface with smooth interactions.",
        "Demonstrated proficiency in modern front-end technologies and best practices.",
        "Plan to enhance the app by integrating backend functionality for real-time messaging.",
      ],
    },
    {
      title: "Web Development",
      company_name: "Movie Database System",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2024 - Dec 2024",
      points: [
        "Designed a web application that suggests movies based on user preferences.",
        "Utilized HTML, CSS, and JavaScript, integrating an API to dynamically update the movie list.",
        "Implemented user-friendly buttons and options for personalized recommendations.",
        "Added functionality to watch trailers directly on the site for an enhanced experience.",
        // <>
        //   Direct link:{" "}
        //   <a
        //     href="https://movie-website-theta.vercel.app/"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     style={{ color: "#007bff", textDecoration: "underline" }}
        //   >
        //   </a>
        // </>,
      ],
    },
    {
      title: "Web Development Internship",
      company_name: "Codsoft",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Oct 2023",
      points: [
        "Successfully completed a one-month certified internship focused on web development.",
        "Developed and deployed three web application projects:-  PORTFOLIO , CALCULATOR ,  TO-DO LIST ",
        "Shared project outcomes on LinkedIn to highlight skills and achievements.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      source_code_link: "https://github.com/piyusu/GoFood",
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
      source_code_link: "https://github.com/piyusu/Braiware",
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
      source_code_link: "https://github.com/piyusu/Movie_Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };