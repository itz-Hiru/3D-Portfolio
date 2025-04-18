import { FaAngular, FaCode, FaFigma, FaJava, FaReact } from "react-icons/fa";
import { FaAndroid, FaFlutter, FaGitAlt } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io5";
import { PiCodeSimpleFill } from "react-icons/pi";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 300, suffix: "+", label: "Code Commits" },
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    icon: <IoLogoNodejs />,
    name: "NodeJS",
  },
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <RiNextjsFill />,
    name: "NextJS",
  },
  {
    icon: <SiSpringboot />,
    name: "Spring Boot",
  },
  {
    icon: <FaAngular />,
    name: "Angular",
  },
  {
    icon: <FaAndroid />,
    name: "Android",
  },
  {
    icon: <FaFlutter />,
    name: "Flutter",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    id: 1,
    review:
      "Versatile and skilled Full Stack Developer delivering seamless, high-performance web applications from frontend to backend with precision and efficiency.",
    imgPath: <PiCodeSimpleFill className="text-3xl text-amber-300" />,
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    responsibilities: [
      "Designed and developed end-to-end web applications using modern frontend (React, Next.js) and backend (Node.js, Express, MongoDB) technologies.",
      "Integrated RESTful APIs and ensured secure authentication using JWT, OAuth, and role-based access control.",
      "Collaborated in agile teams to implement responsive, optimized UI/UX, and maintain scalable, reusable codebases.",
    ],
  },
  {
    id: 2,
    review:
      "Proficient Android Developer crafting intuitive, high-performance mobile apps using Android Studio with a focus on user-centric design and robust functionality.",
    imgPath: <FaAndroid className="text-3xl text-green-400" />,
    logoPath: "/images/logo1.png",
    title: "Android Developer",
    responsibilities: [
      "Developed robust, user-friendly Android applications using Java/Kotlin with clean architecture and MVVM pattern.",
      "Integrated APIs, local storage (Room DB), Firebase services, and background tasks for a complete app experience.",
      "Conducted thorough testing and debugging using Android Studio tools to ensure app stability and performance across devices.",
    ],
  },
  {
    id: 3,
    review:
      "Creative UI/UX Designer crafting intuitive, user-focused digital experiences that blend aesthetics with functionality for seamless interaction.",
    imgPath: <IoIosColorPalette className="text-4xl text-orange-400" />,
    logoPath: "/images/logo3.png",
    title: "UI/ UX Designer",
    responsibilities: [
      "Created wireframes, prototypes, and high-fidelity designs using Figma based on user research and client requirements.",
      "Conducted usability testing and iterative design improvements to enhance user satisfaction and accessibility.",
      "Collaborated with developers to ensure accurate implementation of design systems and responsive interfaces.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
