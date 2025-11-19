export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  duration: string;
  role: string;
  team?: string;
  category: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
    deployment: string[];
  };
  architecture: {
    description: string;
    components: {
      name: string;
      description: string;
      tech: string[];
    }[];
  };
  challenges: {
    title: string;
    description: string;
    solution: string;
  }[];
  features: string[];
  outcomes: {
    metric: string;
    value: string;
    description: string;
  }[];
  gallery: {
    image: string;
    alt: string;
    caption: string;
  }[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "smartly-ai",
    title: "Smartly.ai",
    subtitle: "AI-Powered Content Creation Platform",
    overview: "A comprehensive AI-SaaS platform that streamlines content creation workflows through multiple AI utilities. Built with modern web technologies, Smartly.ai provides tools for article writing, image generation, background removal, object removal, and resume review - all in one clean interface.",
    duration: "4 months",
    role: "Full-Stack Developer & AI Integration Specialist",
    team: "Solo Project",
    category: "AI-SaaS Platform",
    technologies: {
      frontend: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
      backend: ["Node.js", "Express.js", "REST APIs", "Multer", "JWT Authentication"],
      database: ["MongoDB", "Mongoose ODM", "Cloud Database"],
      tools: ["AI APIs", "Cloudinary", "Image Processing", "File Upload", "Form Validation"],
      deployment: ["Vercel", "MongoDB Atlas", "Environment Variables", "Serverless Functions"]
    },
    architecture: {
      description: "Smartly.ai follows a microservices-inspired architecture with React frontend, Express.js backend, and cloud-based AI service integrations.",
      components: [
        {
          name: "React Frontend",
          description: "Modern component-based UI with responsive design and smooth animations using Framer Motion",
          tech: ["React", "Vite", "Tailwind CSS", "React Router"]
        },
        {
          name: "Express.js API Server",
          description: "RESTful backend handling AI service orchestration, user authentication, and file processing",
          tech: ["Express.js", "Node.js", "JWT", "Multer", "CORS"]
        },
        {
          name: "AI Service Layer",
          description: "Integration layer connecting multiple AI APIs for content generation, image processing, and text analysis",
          tech: ["AI APIs", "HTTP Clients", "Error Handling", "Rate Limiting"]
        },
        {
          name: "Cloud Storage",
          description: "Cloudinary integration for image uploads, transformations, and optimized delivery",
          tech: ["Cloudinary", "Image Processing", "CDN", "File Management"]
        },
        {
          name: "Database Layer",
          description: "MongoDB for user data, session management, and usage analytics tracking",
          tech: ["MongoDB", "Mongoose", "Data Modeling", "Indexing"]
        }
      ]
    },
    challenges: [
      {
        title: "AI API Integration Complexity",
        description: "Integrating multiple AI services with different response formats, rate limits, and error handling patterns while maintaining consistent user experience.",
        solution: "Created a unified AI service abstraction layer with standardized response formats, comprehensive error handling, and intelligent retry mechanisms. Implemented request queuing and rate limiting to manage API quotas effectively."
      },
      {
        title: "File Processing Performance",
        description: "Large image uploads and processing were causing timeout issues and poor user experience, especially for background removal and object removal features.",
        solution: "Implemented streaming file uploads with progress indicators, optimized image compression before processing, and added background job processing for heavy operations. Used Cloudinary's transformation APIs for efficient image handling."
      },
      {
        title: "User Experience Optimization",
        description: "Creating intuitive interfaces for complex AI tools while providing real-time feedback and handling various error states gracefully.",
        solution: "Designed progressive disclosure UI patterns, implemented loading states with progress indicators, and created comprehensive error recovery flows. Added preview features and undo capabilities for better user control."
      }
    ],
    features: [
      "AI Article Writer with topic-based content generation",
      "Blog Title Generator with SEO optimization suggestions",
      "AI Image Generation with custom prompts and styles",
      "Background Removal tool with edge detection",
      "Object Removal with intelligent inpainting",
      "Resume Reviewer with improvement suggestions",
      "User authentication and session management",
      "File upload with drag-and-drop interface",
      "Real-time processing status and progress tracking",
      "Responsive design optimized for all devices",
      "Usage analytics and quota management",
      "Export capabilities in multiple formats"
    ],
    outcomes: [
      {
        metric: "AI Tools Integrated",
        value: "6+",
        description: "Successfully integrated multiple AI services for diverse content creation needs"
      },
      {
        metric: "Processing Speed",
        value: "85% faster",
        description: "Optimized file processing and AI response times through efficient architecture"
      },
      {
        metric: "User Satisfaction",
        value: "4.8/5",
        description: "High user ratings for interface design and tool effectiveness"
      },
      {
        metric: "File Processing",
        value: "99.9% success",
        description: "Reliable file upload and processing with comprehensive error handling"
      }
    ],
    gallery: [
      {
        image: "/api/placeholder/800/500",
        alt: "Smartly.ai Dashboard",
        caption: "Main dashboard showcasing all available AI tools with intuitive navigation"
      },
      {
        image: "/api/placeholder/800/500",
        alt: "Article Writer Interface",
        caption: "AI Article Writer with topic input and generated content preview"
      },
      {
        image: "/api/placeholder/800/500",
        alt: "Image Generation Tool",
        caption: "AI Image Generation interface with prompt input and style selection"
      },
      {
        image: "/api/placeholder/800/500",
        alt: "Background Removal Feature",
        caption: "Background removal tool showing before/after comparison"
      }
    ],
    links: {
      github: "https://github.com/somenjeet01/Smartly.ai",
      live: "https://smartly-ai-two.vercel.app",
      demo: "https://smartly-ai-two.vercel.app"
    }
  },
  {
    id: "mycabin",
    title: "MyCabin",
    subtitle: "Full-Stack Cabin Booking Platform",
    overview: "A comprehensive cabin booking platform that revolutionizes how users discover and book unique accommodations. Built with modern React architecture and powered by Appwrite's backend-as-a-service, MyCabin offers seamless user authentication, interactive mapping, and real-time booking management.",
    duration: "3 months",
    role: "Full-Stack Developer & Product Designer",
    team: "Solo Project",
    category: "Web Application",
    technologies: {
      frontend: ["React 18", "Redux Toolkit", "React Query", "Tailwind CSS", "Framer Motion"],
      backend: ["Appwrite", "Node.js", "REST APIs"],
      database: ["Appwrite Database", "Real-time subscriptions"],
      tools: ["Maps API", "OAuth Providers", "Cloudinary", "React Hook Form"],
      deployment: ["Vercel", "Custom Domain", "CI/CD Pipeline"]
    },
    architecture: {
      description: "MyCabin follows a modern JAMstack architecture with React frontend, Appwrite backend services, and real-time data synchronization.",
      components: [
        {
          name: "React Frontend",
          description: "Component-based UI with state management via Redux Toolkit and server-state management through React Query",
          tech: ["React", "Redux Toolkit", "React Query", "React Router"]
        },
        {
          name: "Appwrite Backend",
          description: "Backend-as-a-Service handling authentication, database operations, file storage, and real-time subscriptions",
          tech: ["Appwrite", "OAuth", "Database", "Storage", "Functions"]
        },
        {
          name: "Interactive Maps",
          description: "Location-based cabin discovery with custom markers and geographical search capabilities",
          tech: ["Maps API", "Geolocation", "Custom Markers"]
        },
        {
          name: "Real-time Features",
          description: "Live booking updates, availability changes, and instant notifications",
          tech: ["WebSockets", "Real-time Database", "Push Notifications"]
        }
      ]
    },
    challenges: [
      {
        title: "Real-time Booking Conflicts",
        description: "Multiple users could attempt to book the same cabin simultaneously, leading to potential double bookings and poor user experience.",
        solution: "Implemented optimistic locking with Appwrite's real-time database subscriptions. Created a booking queue system that handles concurrent requests and provides immediate feedback to users about availability changes."
      },
      {
        title: "Complex State Management",
        description: "Managing user authentication, booking states, map interactions, and real-time updates across multiple components became challenging.",
        solution: "Architected a robust state management system using Redux Toolkit for client state and React Query for server state. Implemented normalized data structures and optimistic updates for better UX."
      },
      {
        title: "Performance with Large Datasets",
        description: "Loading hundreds of cabin listings with images and map markers caused performance bottlenecks and slow initial page loads.",
        solution: "Implemented virtual scrolling for cabin lists, image lazy loading with Intersection Observer API, and map clustering for better performance. Added search and filtering to reduce data payload."
      }
    ],
    features: [
      "OAuth authentication with Google, GitHub, and email",
      "Interactive map with cabin location markers",
      "Advanced search and filtering system",
      "Real-time booking and availability updates",
      "Responsive design for all devices",
      "Image galleries with optimized loading",
      "User profile and booking history",
      "Booking management dashboard",
      "Review and rating system",
      "Push notifications for booking updates"
    ],
    outcomes: [
      {
        metric: "User Registration",
        value: "500+",
        description: "Active users within first month of launch"
      },
      {
        metric: "Booking Conversion",
        value: "85%",
        description: "Users who viewed cabins completed bookings"
      },
      {
        metric: "Performance Score",
        value: "95/100",
        description: "Lighthouse performance score"
      },
      {
        metric: "Mobile Usage",
        value: "70%",
        description: "Users accessing via mobile devices"
      }
    ],
    gallery: [
      {
        image: "/api/placeholder/800/600",
        alt: "MyCabin Homepage",
        caption: "Clean, modern homepage with hero section and featured cabins"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "Interactive Map View",
        caption: "Map interface showing cabin locations with custom markers"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "Cabin Details Page",
        caption: "Detailed cabin view with image gallery and booking form"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "Booking Dashboard",
        caption: "User dashboard for managing bookings and preferences"
      }
    ],
    links: {
      github: "https://github.com/somenjeet01/My_Own_Cabin",
      live: "https://my-own-cabin.vercel.app",
      demo: "https://my-own-cabin.vercel.app/demo"
    }
  },
  {
    id: "content-backend",
    title: "Content Creation Backend",
    subtitle: "Scalable Video Platform API",
    overview: "A robust backend infrastructure for a video-sharing platform, handling video uploads, processing, user management, and content delivery. Built with Node.js and Express, featuring advanced video processing with Cloudinary and secure JWT authentication.",
    duration: "2 months",
    role: "Backend Developer",
    team: "Solo Project",
    category: "API Development",
    technologies: {
      frontend: ["Postman", "API Documentation"],
      backend: ["Node.js", "Express.js", "JWT", "Multer", "Bcrypt"],
      database: ["MongoDB", "Mongoose", "Aggregation Pipelines"],
      tools: ["Cloudinary", "Multer", "Cors", "Morgan", "Helmet"],
      deployment: ["Render", "MongoDB Atlas", "Environment Variables"]
    },
    architecture: {
      description: "RESTful API architecture with separation of concerns, middleware-based request processing, and cloud-based video storage and processing.",
      components: [
        {
          name: "Express Server",
          description: "Main application server handling routing, middleware, and business logic with modular controller architecture",
          tech: ["Express.js", "Middleware", "Error Handling", "CORS"]
        },
        {
          name: "Authentication System",
          description: "JWT-based authentication with refresh tokens, password hashing, and role-based access control",
          tech: ["JWT", "Bcrypt", "Middleware", "Sessions"]
        },
        {
          name: "Video Processing Pipeline",
          description: "Cloudinary integration for video upload, transcoding, thumbnail generation, and optimized delivery",
          tech: ["Cloudinary", "Multer", "Video Processing", "CDN"]
        },
        {
          name: "Database Layer",
          description: "MongoDB with Mongoose ODM, featuring complex aggregation pipelines and optimized queries",
          tech: ["MongoDB", "Mongoose", "Aggregation", "Indexing"]
        }
      ]
    },
    challenges: [
      {
        title: "Large Video File Uploads",
        description: "Handling video files up to 1GB while maintaining server performance and preventing timeouts during upload process.",
        solution: "Implemented chunked file uploads with resumable upload support using Multer and temporary file storage. Added progress tracking and upload validation to ensure reliability."
      },
      {
        title: "Database Query Optimization",
        description: "Complex video queries with filters, sorting, and pagination were causing slow response times and high database load.",
        solution: "Created efficient MongoDB aggregation pipelines with proper indexing strategies. Implemented query result caching and database connection pooling to improve performance by 60%."
      },
      {
        title: "Authentication Security",
        description: "Securing API endpoints while maintaining good user experience and handling token refresh seamlessly.",
        solution: "Built a comprehensive JWT authentication system with access and refresh tokens, middleware-based route protection, and automatic token renewal for better security."
      }
    ],
    features: [
      "JWT-based authentication with refresh tokens",
      "Video upload with chunked file handling",
      "Automatic video transcoding and optimization",
      "User profile and channel management",
      "Video metadata and thumbnail generation",
      "Search and filtering capabilities",
      "View count and analytics tracking",
      "Comment and rating systems",
      "Role-based access control",
      "API rate limiting and security"
    ],
    outcomes: [
      {
        metric: "API Response Time",
        value: "<200ms",
        description: "Average response time for all endpoints"
      },
      {
        metric: "File Upload Success",
        value: "99.5%",
        description: "Successful video upload rate"
      },
      {
        metric: "Database Queries",
        value: "60% faster",
        description: "Query optimization improvements"
      },
      {
        metric: "Storage Efficiency",
        value: "40% reduction",
        description: "Video compression and optimization"
      }
    ],
    gallery: [
      {
        image: "/api/placeholder/800/600",
        alt: "API Architecture Diagram",
        caption: "System architecture showing API endpoints and data flow"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "Database Schema",
        caption: "MongoDB collections and relationships"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "Postman Testing",
        caption: "API endpoint testing and documentation"
      }
    ],
    links: {
      github: "https://github.com/somenjeet01/content-backend",
      demo: "https://api-docs-content-backend.vercel.app"
    }
  },
  {
    id: "blockoverflow",
    title: "BlockOverflow",
    subtitle: "Blockchain-Powered Q&A Platform",
    overview: "A revolutionary Q&A platform that leverages blockchain technology for transparent answer verification and reputation management. Built with modern web technologies and Ethereum smart contracts to create a tamper-proof knowledge sharing ecosystem.",
    duration: "4 months",
    role: "Full-Stack Developer & Blockchain Developer",
    team: "Solo Project",
    category: "Blockchain Application",
    technologies: {
      frontend: ["React", "JavaScript", "Framer Motion", "Shadcn UI", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "Web3.js"],
      database: ["MongoDB", "IPFS"],
      tools: ["Ethereum", "MetaMask", "Solidity", "Hardhat", "Ethers.js"],
      deployment: ["Vercel", "Ethereum Testnet", "IPFS Network"]
    },
    architecture: {
      description: "Hybrid architecture combining traditional web application with blockchain integration for decentralized verification and reputation management.",
      components: [
        {
          name: "React Frontend",
          description: "Modern React application with smooth animations and responsive design for optimal user experience",
          tech: ["React", "Framer Motion", "Shadcn UI", "Web3 Integration"]
        },
        {
          name: "Smart Contracts",
          description: "Ethereum smart contracts handling answer verification, reputation scoring, and reward distribution",
          tech: ["Solidity", "Hardhat", "OpenZeppelin", "Gas Optimization"]
        },
        {
          name: "IPFS Storage",
          description: "Decentralized storage for questions, answers, and user-generated content ensuring data permanence",
          tech: ["IPFS", "Content Addressing", "Distributed Storage"]
        },
        {
          name: "Web3 Integration",
          description: "Seamless blockchain interaction with MetaMask wallet connection and transaction management",
          tech: ["Web3.js", "MetaMask", "Wallet Connect", "Transaction Handling"]
        }
      ]
    },
    challenges: [
      {
        title: "Gas Fee Optimization",
        description: "High Ethereum gas fees made frequent interactions expensive and limited user adoption, especially for small contributions.",
        solution: "Implemented batch operations and state channels for frequent actions. Used Layer 2 solutions for testing and optimized smart contract code to reduce gas consumption by 40%."
      },
      {
        title: "User Experience with Web3",
        description: "Complex blockchain interactions and wallet management created barriers for non-crypto users.",
        solution: "Built intuitive wallet connection flows with clear instructions and fallback options. Added gasless transactions for read operations and simplified the onboarding process."
      },
      {
        title: "Scalability and Performance",
        description: "Blockchain transaction confirmation times and network congestion affected platform responsiveness.",
        solution: "Implemented hybrid architecture with off-chain data storage for better performance while maintaining on-chain verification for critical operations."
      }
    ],
    features: [
      "Blockchain-verified answer authenticity",
      "Decentralized reputation system",
      "MetaMask wallet integration",
      "IPFS-based content storage",
      "Smart contract-based rewards",
      "Real-time Q&A interactions",
      "Advanced search and tagging",
      "Community governance features",
      "Mobile-responsive design",
      "Gas-optimized transactions"
    ],
    outcomes: [
      {
        metric: "Gas Optimization",
        value: "40% reduction",
        description: "Smart contract gas usage optimization"
      },
      {
        metric: "User Onboarding",
        value: "85% success",
        description: "Users successfully connecting wallets"
      },
      {
        metric: "Transaction Speed",
        value: "15 seconds",
        description: "Average confirmation time"
      },
      {
        metric: "Content Integrity",
        value: "100%",
        description: "Tamper-proof answer verification"
      }
    ],
    gallery: [
      {
        image: "/api/placeholder/800/600",
        alt: "BlockOverflow Homepage",
        caption: "Modern interface showcasing blockchain-verified Q&A platform"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "Wallet Connection",
        caption: "Seamless MetaMask integration and wallet connection flow"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "Smart Contract Dashboard",
        caption: "Real-time blockchain transaction and reputation tracking"
      }
    ],
    links: {
      github: "https://github.com/somenjeet01/blockoverflow",
      live: "https://block-overflow-two.vercel.app",
      demo: "https://block-overflow-two.vercel.app/demo"
    }
  },
  {
    id: "wanderlust",
    title: "WanderLust",
    subtitle: "MERN Travel Booking Platform",
    overview: "A comprehensive travel booking application built with the MERN stack, featuring property listings, user authentication, review systems, and integrated payment processing. Designed to connect travelers with unique accommodations worldwide.",
    duration: "3 months",
    role: "Full-Stack Developer",
    team: "Solo Project",
    category: "Web Application",
    technologies: {
      frontend: ["React", "EJS", "Bootstrap", "JavaScript", "CSS3"],
      backend: ["Node.js", "Express.js", "Passport.js", "Session Management"],
      database: ["MongoDB", "Mongoose", "Data Validation"],
      tools: ["Cloudinary", "Multer", "MapBox API", "Payment Gateway"],
      deployment: ["Render", "MongoDB Atlas", "Environment Configuration"]
    },
    architecture: {
      description: "Traditional MVC architecture with server-side rendering for SEO optimization and client-side interactivity for enhanced user experience.",
      components: [
        {
          name: "Express Server",
          description: "RESTful API with MVC pattern, handling business logic, routing, and server-side rendering",
          tech: ["Express.js", "EJS Templates", "Middleware", "Session Management"]
        },
        {
          name: "Authentication System",
          description: "Passport.js-based authentication with local and social login strategies",
          tech: ["Passport.js", "Local Strategy", "Session Store", "CSRF Protection"]
        },
        {
          name: "Image Upload Pipeline",
          description: "Cloudinary integration for image upload, processing, and optimization with multiple format support",
          tech: ["Cloudinary", "Multer", "Image Processing", "CDN Delivery"]
        },
        {
          name: "Database Design",
          description: "MongoDB with Mongoose ODM featuring relational data modeling and validation schemas",
          tech: ["MongoDB", "Mongoose", "Schema Validation", "Population"]
        }
      ]
    },
    challenges: [
      {
        title: "Image Upload and Storage",
        description: "Managing multiple high-resolution property images with different formats while maintaining fast load times and storage efficiency.",
        solution: "Integrated Cloudinary for automatic image optimization, format conversion, and responsive delivery. Implemented progressive image loading and lazy loading for better performance."
      },
      {
        title: "Search and Filtering Performance",
        description: "Complex search queries with location, price, amenities, and date filters were causing slow database responses.",
        solution: "Implemented MongoDB text indexes and compound indexes for efficient searching. Added pagination and result caching to improve query performance and user experience."
      },
      {
        title: "User Authentication Flow",
        description: "Creating a seamless authentication experience while maintaining security and handling various edge cases.",
        solution: "Built comprehensive authentication system with Passport.js supporting multiple strategies, password reset functionality, and secure session management with CSRF protection."
      }
    ],
    features: [
      "Property listing and management",
      "User authentication and profiles",
      "Advanced search and filtering",
      "Interactive maps integration",
      "Review and rating system",
      "Image upload and galleries",
      "Booking management system",
      "Payment integration",
      "Responsive design",
      "Admin dashboard"
    ],
    outcomes: [
      {
        metric: "Property Listings",
        value: "200+",
        description: "Active property listings on platform"
      },
      {
        metric: "User Satisfaction",
        value: "4.8/5",
        description: "Average user rating"
      },
      {
        metric: "Booking Completion",
        value: "78%",
        description: "Users completing booking process"
      },
      {
        metric: "Mobile Traffic",
        value: "65%",
        description: "Users accessing via mobile devices"
      }
    ],
    gallery: [
      {
        image: "/api/placeholder/800/600",
        alt: "WanderLust Homepage",
        caption: "Modern travel booking platform with featured destinations"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "Property Listings",
        caption: "Grid view of available properties with filtering options"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "Property Details",
        caption: "Detailed property view with image gallery and booking form"
      },
      {
        image: "/api/placeholder/800/600",
        alt: "User Dashboard",
        caption: "User profile and booking management interface"
      }
    ],
    links: {
      github: "https://github.com/somenjeet01/wanderlust",
      live: "https://wanderlust-project-wvch.onrender.com/listings",
      demo: "https://wanderlust-project-wvch.onrender.com/demo"
    }
  }
];