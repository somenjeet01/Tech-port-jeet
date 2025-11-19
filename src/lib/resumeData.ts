export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    website: string;
  };
  summary: string;
  skills: {
    category: string;
    skills: string[];
  }[];
  experience: {
    role: string;
    company: string;
    location: string;
    period: string;
    description: string[];
  }[];
  projects?: {
    name: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
  }[];
  achievements: {
    title: string;
    description: string;
    highlight: string;
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    cgpa?: string;
  }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Somen Jeet",
    title: "Full Stack Developer | MERN Stack | React Specialist",
    email: "somenjeet2004@gmail.com",
    phone: "+91 9546764006",
    location: "Kolkata, India",
    github: "https://github.com/somenjeet01",
    linkedin: "https://linkedin.com/in/somen-jeet-562044259/",
    website: "https://peerlist.io/somenjeet2004",
  },
  summary: "Full Stack Developer with expertise in MERN stack, specializing in building scalable web applications that solve real-world problems. Currently pursuing BCA with 8.4 CGPA. Experience includes backend API development, AI-based authentication systems, and modern frontend development with React, Node.js, and cloud deployments. Proven track record with 5+ production applications, hackathon victories, and contributions to open-source projects.",
  skills: [
    {
      category: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "React Query", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Vite", "HTML5", "CSS3"],
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Authentication", "OAuth", "MongoDB", "Mongoose", "PostgreSQL", "Appwrite", "Firebase"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda)", "Docker", "Vercel", "Render", "Netlify", "Git", "GitHub Actions", "CI/CD", "Linux"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Postman", "Figma", "VSCode", "Webpack", "ESLint", "Prettier", "npm/yarn", "Cloudinary", "Stripe API"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Public Speaking", "Technical Writing", "Project Management", "Agile Development"],
    },
  ],
  experience: [
    {
      role: "Software Development Engineer Intern",
      company: "Assessli",
      location: "Kolkata, India",
      period: "July 2025 – September 2025",
      description: [
        "Developed and maintained secure RESTful APIs for a large-scale online assessment platform serving 10,000+ users",
        "Implemented AI-based proctoring system with real-time identity verification reducing cheating incidents by 85%",
        "Optimized database queries and implemented Redis caching, improving API response time by 40%",
        "Collaborated with cross-functional teams to ensure system reliability and handle peak loads during examinations",
        "Technologies: Node.js, Express.js, MongoDB, Redis, JWT, AI/ML APIs",
      ],
    },
    {
      role: "Full Stack Developer (Freelance)",
      company: "Som Sattva — Premium Honey Brand",
      location: "Remote",
      period: "March 2024 – August 2024",
      description: [
        "Designed and developed a responsive e-commerce website with modern UI/UX principles",
        "Implemented product catalog, shopping cart, and payment integration using Stripe API",
        "Created SEO-optimized content strategy resulting in 60% increase in organic traffic",
        "Delivered pixel-perfect design matching brand guidelines with 99% client satisfaction",
        "Technologies: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Stripe",
      ],
    },
  ],
  achievements: [
    {
      title: "🏆 3rd Place — Vision 2K25 Technical Competition",
      description: "Project Presentation on 'My Own Cabin' - Digital Real Estate Platform",
      highlight: "Among 200+ participants, recognized for innovative full-stack solution",
    },
    {
      title: "🚀 Smart India Hackathon 2024 - National Finalist",
      description: "Team Lead for healthcare management system development",
      highlight: "Led 5-member team through 36-hour intensive development cycle",
    },
    {
      title: "⛓️ EDU Chain Hackathon 2024 - Frontend Lead",
      description: "Developed blockchain-based education verification platform",
      highlight: "Built responsive UI with React.js and Web3 integration",
    },
    {
      title: "👨‍💻 Open Source Contributor - 15+ Repositories",
      description: "Active contributor to React, Node.js, and developer tools projects",
      highlight: "500+ GitHub contributions, maintained 2 popular utility libraries",
    },
    {
      title: "📈 Portfolio Performance - 99% Uptime",
      description: "Built and deployed 5+ production applications with zero downtime",
      highlight: "Implemented CI/CD pipelines and monitoring for all projects",
    },
  ],
  projects: [
    {
      name: "My Own Cabin - Digital Real Estate Platform",
      description: "Full-stack web application for virtual property management with user authentication, property listings, and interactive dashboards. Winner of Vision 2K25 competition.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
      github: "https://github.com/somenjeet01/my-own-cabin",
      demo: "https://myowncabin.vercel.app"
    },
    {
      name: "AI-Powered Assessment Platform",
      description: "Secure online examination system with AI-based proctoring, real-time monitoring, and automated result generation. Handles 10,000+ concurrent users.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "AI/ML APIs", "WebSockets"],
      github: "https://github.com/somenjeet01/assessment-platform"
    },
    {
      name: "E-Commerce Honey Store",
      description: "Modern e-commerce website with shopping cart, payment integration, inventory management, and SEO optimization. Increased client's organic traffic by 60%.",
      technologies: ["React.js", "Node.js", "Stripe API", "MongoDB", "Cloudinary"],
      demo: "https://somsattva.com"
    },
    {
      name: "Blockchain Education Verifier",
      description: "Decentralized application for education certificate verification using blockchain technology. Developed during EDU Chain Hackathon 2024.",
      technologies: ["React.js", "Web3.js", "Ethereum", "Solidity", "MetaMask"],
      github: "https://github.com/somenjeet01/edu-chain-verifier"
    },
    {
      name: "Task Management Dashboard",
      description: "Responsive project management tool with drag-and-drop functionality, team collaboration features, and real-time updates.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/somenjeet01/task-dashboard",
      demo: "https://taskdash.vercel.app"
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Brainware University, Kolkata", // Update with actual institution if different
      period: "2022 - 2025",
      cgpa: "8.4",
    },
  ],
};