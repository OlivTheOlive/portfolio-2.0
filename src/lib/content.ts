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
  quote: string;
  message: string;
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
  quote: "I like to fix and build things.",
  avatar: "/images/avatar.jpg",
  about:
    "Hi, I'm Olivié Bergeron, aspiring developer. I have a College Diploma in Computer Programming from Algonquin College. I interned as a full-stack developer at Nortac Defence, working on web and mobile applications. I'm currently pursuing ISC²'s Cybersecurity certification while building various projects. I love learning new technologies and am always eager to collaborate on interesting projects. Outside of coding, I enjoy making specialty candles using 3D design, creating music, and playing/making gaming.",
  message:
    "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  socials: {
    github: "https://github.com/OlivTheOlive", // if no github leave blank
    linkedin: "https://www.linkedin.com/in/olivié-bergeron/", // if no linkedin leave blank
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
      title: "Junior Full Stack Developer",
      company: "Nortac Defence",
      location: "Ottawa, Canada",
      period: "May 2024 - August 2024",
      description: [
        "Led design and implementation of a customizable geofencing feature with multi-color support, delivering enhanced user personalization through React.js, Node.js, and Express.js",
        "Optimized platform architecture to support multiple live chat windows, increasing simultaneous chat capacity from 1 to 3 using JavaScript socket handling and React.js",
        "Developed Legal/About page UI components for Android NTAC app using React Native, ensuring open-source compliance and passing all QA assessments",
        "Development of Windows Tablet application using React.js, Electron.js, and Redux, implementing registration, login, and legal information systems",
        "Integrated new device registration features using React.js, Node.js, and MySQL, demonstrating rapid response to customer requirements",
      ],
    },
  ],
  projects: [
    {
      title: "Zoho Customer Portal Prototype",
      description:
        "As team lead, I developed a Node.js backend application that integrates with ZOHO API to synchronize project data with MongoDB and serve it through API routes to a React.js frontend prototype, providing a more flexible alternative to Zoho Creator for the client.",
      tags: [
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Zoho API",
        "React.js",
        "MERN Stack",
        "Express.js",
      ],
      image: "", // if no image leave blank
      link: "", // if no link leave blank
      github: "https://github.com/OlivTheOlive/clientZohoNodeApi", // if no github leave blank
    },
    {
      title: "RoadRunner",
      description:
        "A mobile application built with React Native and Expo that provides real-time route tracking and navigation using various mapping APIs (Google Directions, Mapbox) with a MongoDB/Express.js backend for data management.",
      tags: [
        "JavaScript",
        "React-Native",
        "Axios",
        "Geolib",
        "react-native-maps",
        "Expo",
        "expo-location",
        "Mapbox Polyline",
        "Express.js",
        "Jest",
        "Mongoose",
        "Nodemon",
        "Google Direction API",
      ],
      image: "", // if no image leave blank
      link: "", // if no link leave blank
      github: "https://github.com/OlivTheOlive/RoadRunnerV2", // if no github leave blank
    },
    {
      title: "Portfolio Template",
      description:
        "A dashboard for tracking personal finances, expenses, and investments with data visualization.",
      tags: [
        "TypeScript",
        "Tailwind CSS",
        "React.js",
        "Next.js",
        "Lucide React",
        "Next Theme",
        "Shadcn UI",
        "Framer Motion",
      ],
      image: "/images/template.png", // if no image leave blank
      link: "", // if no link leave blank
      github: "https://github.com/OlivTheOlive/portfolio-2.0", // if no github leave blank
    },
    {
      title: "Track Your Sub",
      description:
        "A simple calculator to help track protein, carbs, and fats from my favorite Canadian sandwiches. Available in English and French!",
      tags: [
        "TypeScript",
        "Tailwind CSS",
        "React.js",
        "Next.js",
        "Lucide React",
        "Next Theme",
        "Shadcn UI",
        "Framer Motion",
      ],
      image: "/images/sub.png", // if no image leave blank
      link: "https://buildyoursandwich.vercel.app/", // if no link leave blank
    },
  ],
};

export default personalInfo;
