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
      title: "Blender designer",
      icon: web,
    },
    {
      title: "UI/UX",
      icon: mobile,
    },
    {
      title: "2D artist",
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
      title: "High School",
      company_name: "Sandeepani Niketan English School",
      iconBg: "#383E56",
      date: "2015 - 2020",
      points: [
     
      ],
    },
    {
      title: "Pre University",
      company_name: "St. Josephs pre university",
      iconBg: "#383E56",
      date: "2020 - 2022",
      points: [
        
      ],
    },
    {
      title: "Bachelors",
      company_name: "St. Josephs University",
      iconBg: "#383E56",
      date: "2023 - present",
      points: [
        
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Very creative student",
      name: "Sara Lee",
      designation: "Teacher",
      company: "St. Josephs University",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Good student and really artistic",
      name: "Chris Brown",
      designation: "Teacher",
      company: "St .Josephs University",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "He made a website for me and its really helped me a lot!",
      name: "Lisa Wang",
      designation: "Teacher",
      company: "St Josephs University",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Interactive solar system",
      description:
        "An app based game that gives information about planets",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      
    },
    {
      name: "Interactive table",
      description:
        "puzzle based app to see how an asset looks in different materials.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      
    },
    {
      name: "Robot rigging",
      description:
        "A game ready robot charecter with movement.",
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
      image: tripguide,
      
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };