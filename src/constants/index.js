import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate Front End Developer. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL , Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Front End Developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "U media Website",
    image: project1,
    description:
      "A fully functional website which uses youtube api to take data and having differnt section in which it shows differnt contents like gym , study , coding . Also have a serach options to watch your desize contents.",
    technologies: ["HTML", "TailwindCss", "React", "javascript" , "Api"],
  },
  {
    title: "Song App",
    image: project2,
    description:
      "A song app uses spotify api to fetch data and user can able to play song . User can liste any any song which user wants",
    technologies: ["HTML", "CSS", "React", "Api" , "Bootsrap" , "Javascript","MUI"],
  },
  {
    title: "Authorization Page",
    image: project3,
    description:
      "A authorization page having sign up and login function for user and also sigup/login using goofle ",
    technologies: ["HTML", "React", "Tailwindcss" , "Firebase" , 'Javascript']
  },
  {
    title: "Potfolio website",
    image: project4,
    description:
      "portfolio website in user can put their portfolio and sent to ",
    technologies: ["HTML", "Vite.js", "framer-motion", "Tailwindcss"],
  },
];

export const CONTACT = {
  address: "A-5 / 122-C Paschim Vihar , New Delhi",
  phoneNo: "+919899721868",
  email: "negiujjwal78@gmail.com",
};
