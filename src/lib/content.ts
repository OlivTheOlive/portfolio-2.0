// lib/content.ts

export type Experience = {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
  };
  
  export type Project = {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
    github?: string;
  };
  
  export type PersonalInfo = {
    name: string;
    title: string;
    email: string;
    location: string;
    about: string;
    avatar: string;
    socials: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      instagram?: string;
    };
    skills: string[];
    experiences: Experience[];
    projects: Project[];
  };
  
  const personalInfo: PersonalInfo = {
    name: "Olivie Bergeron",
    title: "Full Stack Developer",
    email: "oliviebergeron@gmail.com",
    location: "Ottawa, Canada",
    avatar: "/images/avatar.jpg",
    about:
      "I'm a passionate developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences and robust applications. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.",
    socials: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
    ],
    experiences: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Company",
        location: "Remote",
        period: "Jan 2022 - Present",
        description: [
          "Led the development of the company's flagship product using React and TypeScript",
          "Implemented responsive designs and animations using Framer Motion",
          "Collaborated with designers and backend developers to create seamless user experiences",
          "Mentored junior developers and conducted code reviews",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Startup Inc.",
        location: "City, Country",
        period: "Mar 2020 - Dec 2021",
        description: [
          "Developed and maintained web applications using React, Node.js, and MongoDB",
          "Implemented RESTful APIs and GraphQL endpoints",
          "Optimized application performance and improved load times by 40%",
          "Participated in agile development processes and sprint planning",
        ],
      },
      {
        title: "Junior Web Developer",
        company: "Web Agency",
        location: "City, Country",
        period: "Jun 2018 - Feb 2020",
        description: [
          "Built responsive websites for clients using HTML, CSS, and JavaScript",
          "Collaborated with designers to implement pixel-perfect designs",
          "Maintained and updated existing client websites",
          "Assisted in the migration of legacy systems to modern frameworks",
        ],
      },
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description:
          "A full-featured e-commerce platform with product listings, cart functionality, and payment processing.",
        tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
        image: "/images/project1.jpg",
        link: "https://project1.example.com",
        github: "https://github.com/yourusername/project1",
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates and team features.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
        image: "/images/project2.jpg",
        link: "https://project2.example.com",
        github: "https://github.com/yourusername/project2",
      },
      {
        title: "Personal Finance Dashboard",
        description:
          "A dashboard for tracking personal finances, expenses, and investments with data visualization.",
        tags: ["React", "D3.js", "Firebase", "Material UI"],
        image: "/images/project3.jpg",
        link: "https://project3.example.com",
        github: "https://github.com/yourusername/project3",
      },
    ],
  };
  
  export default personalInfo;