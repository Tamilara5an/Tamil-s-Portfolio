import ecomImg from "../assets/ecom.jpeg";
import weatherImg from "../assets/weather.jpeg";
import blogImg from "../assets/blog.jpeg";
import taskImg from "../assets/task.jpg";
import augustLogo from "../assets/august.jpg";
import wiseworkLogo from "../assets/wisework.png";
import hanodaleLogo from "../assets/hanodale.jpg";

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Designed and developed the front-end of a responsive e-commerce website using HTML, CSS, JavaScript, and React, delivering an intuitive and visually appealing user experience. Implemented key features such as product listing pages, search functionality, and dynamic shopping cart using React state management. Optimized website performance by employing best practices in CSS and React, achieving faster load times and improved responsiveness across devices.",
    tags: ["HTML", "CSS", "JavaScript", "Reactjs"],
    github: "https://github.com/Tamilara5an/Ecommerse-mobiles/",
    image: ecomImg,
  },
  {
    title: "Web Application for Weather Detection",
    description:
      "Designed and developed a user-friendly web interface using HTML, CSS, JavaScript, and React.js, providing real-time weather updates through API integration. Implemented responsive design principles to ensure seamless functionality across different devices, enhancing user accessibility by 25%. Integrated interactive features such as search functionality and dynamic weather visuals, improving user engagement.",
    tags: ["HTML", "CSS", "JavaScript", "Reactjs"],
    github: "https://github.com/Tamilara5an/Weather-Application-using-web-API",
    image: weatherImg,
  },
  {
    title: "Blog Application using Blazor",
    description:
      "Developed a blog platform using C# Blazor Server with MudBlazor UI, enabling an interactive and modern user interface. Implemented role-based authentication and authorization to manage user access for creating, editing, and moderating posts. Built backend services with .NET to support post creation, commenting functionality, and secure data management.",
    tags: ["C#", "Blazor", "Supabase", "MongoDB", "MudBlazor"],
    github:
      "https://github.com/Tamilara5an/BlogApplication-using-Blazor-ServerApp",
    image: blogImg,
  },
  {
    title: "Task Management System",
    description:
      "Designed and developed the frontend using React with Vite for a fast, responsive, and optimized user interface. Implemented backend services with Java (Spring Boot) to handle business logic, authentication, and RESTful APIs. Integrated SQL database for secure data storage, supporting task creation, updates, and role-based access control.",
    tags: ["Reactjs", "Java", "SpringBoot", "PostgreSQL", "RESTful APIs"],
    github: "#",
    image: taskImg,
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    name: "Java",
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    name: "SpringBoot",
    icon: "https://img.icons8.com/color/512/spring-logo.png",
  },
  { name: "C#", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
  {
    name: "HTML",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
  },
  { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  {
    name: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "React.js",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    name: "Postman",
    icon: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
  },
  {
    name: "Vite",
    icon: "https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000",
  },
  {
    name: "Postgres",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/512/mongo-db.png",
  },
  {
    name: "Docker",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
  },
  {
    name: "JDBC",
    icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/512/tailwindcss.png",
  },
  { name: "Git", icon: "https://img.icons8.com/color/512/git.png" },
  {
    name: "Node JS",
    icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
  },
  {
    name: "Freshdesk",
    icon: "https://img.icons8.com/?size=100&id=apQXuzIOhFBG&format=png&color=40C057",
  },
  {
    name: "Freshservice",
    icon: "https://img.icons8.com/?size=100&id=9267&format=png&color=22C3E6",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    role: "Software Engineer",
    company: "AUGUST",
    period: "April 2025 - Present",
    description:
      "Developing and maintaining backend services using Java Spring Boot, implementing scalable business logic and RESTful APIs. Building responsive frontend applications with React.js and Tailwind CSS, ensuring seamless user experience and modern UI design. Worked with PostgreSQL for designing efficient database schemas and ensuring secure, optimized data storage. Working on Fresh service and Freshdesk integrations, customizing workflows and delivering automation solutions to enhance service management.",
    skills: [
      "Java",
      "SpringBoot",
      "React js",
      "PostgreSQL",
      "Fresh Works",
      "Fresh Desk",
    ],
    logo: augustLogo,
  },
  {
    role: "Software Engineer Trainee",
    company: "WISE WORK",
    period: "Nov 2024 - Apr 2023",
    description:
      "Developed full-stack web applications using C# .NET for backend and Blazor with MudBlazor for frontend, improving development efficiency by 25% through reusable UI components. Integrated MongoDB and Supabase authentication, enhancing application security and reducing unauthorized access risks by 30%. Built internal projects including a Weather App and Blog App, improving team productivity and showcasing rapid prototyping capabilities. Contributed to client-facing projects, delivering 100% on-time project completion and ensuring scalability, performance, and maintainability of solutions.",
    skills: ["Dot Net", "C#", "Blazor", "MongoDB", "Supabase", "MudBlazor"],
    logo: wiseworkLogo,
  },
  {
    role: "Full Stack Java Intern",
    company: "HANODALE SOLUTIONS SDN BHD",
    period: "Dec 2023 - May 2024",
    description:
      "Developed and maintained full-stack applications using Java, JDBC, Spring Boot, and MySQL, ensuring reliable and scalable solutions. Created dynamic front-end interfaces with React.js, boosting user engagement and responsiveness by 20%. Implemented RESTful APIs to streamline data exchange between frontend and backend services, improving system efficiency by 15%. Optimized MySQL queries, reducing response time by 15% and enhancing application performance.",
    skills: ["Java", "JDBC", "SpringBoot", "MySql", "React js"],
    logo: hanodaleLogo,
  },
];

// ─── Nav sections ─────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

// ─── Company rotations ────────────────────────────────────────────────────────
export const ABOUT_COMPANIES = ["Sol N Tech", "August Innovate"];
export const EXP_COMPANIES = ["SOL N TECH", "August Innovate"];
