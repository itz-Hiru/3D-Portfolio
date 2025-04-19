import {
  FaAngular,
  FaBehance,
  FaCode,
  FaDribbble,
  FaInstagram,
  FaLaptop,
  FaLinkedinIn,
  FaReact,
  FaRocketchat,
} from "react-icons/fa";
import { FaAndroid, FaFlutter, FaGitAlt } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import {
  IoBarChart,
  IoColorPalette,
  IoLogoNodejs,
  IoTime,
} from "react-icons/io5";
import { PiCodeSimpleFill } from "react-icons/pi";
import { RiLightbulbFlashFill, RiNextjsFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { TbLayoutDashboard } from "react-icons/tb";

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
  {
    id: 1,
    text: "Ideas",
    icon: <RiLightbulbFlashFill className="text-black text-xl" />,
  },
  {
    id: 2,
    text: "Concepts",
    icon: <GiBrain className="text-black text-xl" />,
  },
  {
    id: 3,
    text: "Designs",
    icon: <IoColorPalette className="text-black text-xl" />,
  },
  {
    id: 4,
    text: "Code",
    icon: <FaCode className="text-black text-xl" />,
  },
  {
    id: 5,
    text: "Ideas",
    icon: <RiLightbulbFlashFill className="text-black text-xl" />,
  },
  {
    id: 6,
    text: "Concepts",
    icon: <GiBrain className="text-black text-xl" />,
  },
  {
    id: 7,
    text: "Designs",
    icon: <IoColorPalette className="text-black text-xl" />,
  },
  {
    id: 8,
    text: "Code",
    icon: <FaCode className="text-black text-xl" />,
  },
];

const counterItems = [
  { id: 1, value: 1, suffix: "+", label: "Years of Experience" },
  { id: 2, value: 300, suffix: "+", label: "Code Commits" },
  { id: 3, value: 15, suffix: "+", label: "Completed Projects" },
  { id: 4, value: 90, suffix: "%", label: "Client Retention Rate" },
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
    icon: <IoBarChart className="text-lime-400 text-3xl" />,
    title: "Precision & Excellence",
    description:
      "Committed to delivering top-tier results with meticulous attention to detail in every aspect.",
  },
  {
    icon: <FaRocketchat className="text-amber-300 text-3xl" />,
    title: "Clear Communication",
    description:
      "Ensuring you're always in the loop with timely updates and transparent collaboration.",
  },
  {
    icon: <IoTime className="text-pink-400 text-3xl" />,
    title: "Timely Execution",
    description:
      "Projects delivered on schedule without compromising on quality or detail.",
  },
];

const techStackIcons = [
  {
    id: 1,
    name: "Frontend Developer",
    modelPath: "/models/tech-stack/react-logo.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    id: 2,
    name: "Backend Developer",
    modelPath: "/models/tech-stack/node-logo.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    id: 3,
    name: "UI UX Designer",
    modelPath: "/models/tech-stack/figma-logo.glb",
    scale: 1.8,
    rotation: [0, 0, 0],
  },
  {
    id: 4,
    name: "Interactive Developer",
    modelPath: "/models/tech-stack/threejs-logo.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    id: 5,
    name: "Project Manager",
    modelPath: "/models/tech-stack/git-logo.glb",
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
    logoPath: <FaLaptop className="text-pink-500 text-3xl" />,
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
    logoPath: <FaAndroid className="text-green-400 text-3xl" />,
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
    logoPath: <TbLayoutDashboard className="text-3xl text-amber-400" />,
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
    id: 1,
    name: "James L.",
    mentions: "Startup Founder",
    review:
      "Hirumitha’s attention to detail is unmatched. He took our vague ideas and turned them into a beautifully functional web app that our users love. Timely, communicative, and super talented!",
    imgPath: "/images/Testimonials/James L.png",
  },
  {
    id: 2,
    name: " Emily R.",
    mentions: "Project Manager",
    review:
      "Working with Hirumitha was an absolute breeze. From design to deployment, everything was handled with expertise and clarity. I couldn't be happier with the results.",
    imgPath: "/images/Testimonials/Emily R.png",
  },
  {
    id: 3,
    name: "Arjun D.",
    mentions: "UX Director",
    review:
      "I've worked with many developers, but Hirumitha stands out for her creative approach and deep understanding of user experience. He’s a true problem-solver.",
    imgPath: "/images/Testimonials/Arjun D.png",
  },
  {
    id: 4,
    name: "Sophia M.",
    mentions: "Marketing Lead",
    review:
      "Hirumitha brought our vision to life with stunning UI and smooth functionality. His professionalism and passion shine through in every step of the process.",
    imgPath: "/images/Testimonials/Sophia M.png",
  },
  {
    id: 5,
    name: "Carlos T.",
    mentions: "Business Owner",
    review:
      "Reliable, skilled, and super responsive — Hirumitha exceeded our expectations. The final product was clean, fast, and delivered ahead of schedule!",
    imgPath: "/images/Testimonials/Carlos T.png",
  },
  {
    id: 6,
    name: "Nayomi P.",
    mentions: "Creative Director",
    review:
      "Hirumitha went above and beyond to deliver a sleek, responsive app that perfectly aligns with our brand. He’s got the rare mix of design talent and technical skill.",
    imgPath: "/images/Testimonials/Nayomi P.png",
  },
];

const socialIcons = [
  {
    id: 1,
    name: "insta",
    icon: <FaInstagram className="text-xl text-white" />,
    link: "https://www.instagram.com/x_hiru23/",
  },
  {
    id: 2,
    name: "behance",
    icon: <FaBehance />,
    link: "https://www.behance.net/hirumitkuladew",
  },
  {
    id: 3,
    name: "dribbb6le",
    icon: <FaDribbble />,
    link: "https://dribbble.com/x_Hiru_xx",
  },
  {
    id: 4,
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/hirumitha",
  },
];

export {
  abilities, counterItems,
  expCards,
  expLogos, logoIconsList, navLinks, socialIcons,
  techStackIcons, testimonials, words
};

