export const personalInfo = {
  name: "Shashwat Srivastava",
  title: "Software Engineer",
  tagline: "Building scalable backend solutions and crafting seamless user experiences",
  email: "shashwatswork@gmail.com",
  phone: "+91-XXXXXXXXXX", // Update with your phone number
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://linkedin.com/in/shashwatsrii",
  github: "https://github.com/shashwatsrii",
  about: "I'm a software engineer who genuinely enjoys building things, especially the kind that solve real problems and scale well. I spend most of my time working on the backend side of things, playing with APIs, microservices, and cloud stuff. But honestly, I just like figuring out how things work and making them better.\n\nOutside of code, I'm all about travel, photography, and hunting down great food (bonus points if it's Lucknow food). Whether it's wandering through a new city or capturing a perfect sunset shot, I love stepping away from the screen to explore the world.\n\nAlways up for interesting conversations, tech or otherwise.",
  resume: "/ShashwatSrivastava_SWE.pdf"
}

export const skills = {
  "Programming Languages": ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  "Backend": ["SpringBoot", "Hibernate", "JPA", "FastAPI", "NodeJS", "ExpressJS", "Kafka", "Flyway"],
  "Frontend": ["ReactJS", "NextJS", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  "Database": ["PostgreSQL", "MongoDB", "MySQL", "NoSQL"],
  "DevOps & Tools": ["Docker", "AWS", "GitHub", "JIRA", "Linux", "Grafana", "NewRelic", "ArgoCD", "Sentry"],
  "Technologies": ["RESTful APIs", "Microservices", "OpenAPI", "Temporal", "Zookeeper", "YAML"]
}

export const experience = [
  {
    id: 1,
    role: "SDE Intern (Backend)",
    company: "AtomicWork",
    location: "Bangalore, IN",
    type: "On-Site",
    duration: "Jan 2025 - Present",
    startDate: "2025-01-01",
    description: [
      "Optimized cross-region data consistency while tenant creation, boosting data reliability by 30% using SpringBoot, PostgreSQL, and GoLang",
      "Developed an async Sandbox migration service with conflict detection, monitoring and comparison modules; reduced manual intervention by 60%",
      "Enhanced role-based access control (RBAC) with SpringBoot & JPA, supporting 1000+ users, improving data integrity by 15%",
      "Revamped admin workflows by consolidating multi-environment access & streamlining the Admin app, cutting login time by 50%",
      "Implemented robust error handling reducing support tickets by 20% & zero-downtime data migrations using Hibernate, Flyway, & monitoring"
    ],
    technologies: ["SpringBoot", "PostgreSQL", "GoLang", "JPA", "Hibernate", "Flyway", "Grafana", "ArgoCD"]
  },
  {
    id: 2,
    role: "Backend Engineer Intern",
    company: "Culinda Inc.",
    location: "Hyderabad, IN",
    type: "Hybrid",
    duration: "Jun 2024 - Jan 2025",
    startDate: "2024-06-01",
    description: [
      "Built MagixDB from scratch, created an NLP-driven workflow with OpenAI to query databases, integrating MongoDB, MSSQL & MySQL",
      "Developed an executable of MagixDB using ElectronJS, FastAPI, and integrated with Vite/React for optimized module bundling"
    ],
    technologies: ["FastAPI", "ElectronJS", "React", "MongoDB", "OpenAI", "Vite"]
  },
  {
    id: 3,
    role: "Software Developer Intern",
    company: "Dev2Prod",
    location: "Hyderabad, IN",
    type: "Remote",
    duration: "Oct 2023 - May 2024",
    startDate: "2023-10-01",
    description: [
      "Built RecRoid from scratch. Integrated HumeAI, Supabase & Browserless",
      "Built the 'Career Advice' & 'Live Interview' features for both text & video",
      "Implemented FastAPI backend with ReactJS frontend while improving code quality by 38%. Wrote 30+ APIs"
    ],
    technologies: ["FastAPI", "ReactJS", "HumeAI", "Supabase"]
  },
  {
    id: 4,
    role: "Machine Learning Intern",
    company: "Amrita Vishwa Vidyapeetham",
    location: "Kochi, IN",
    type: "On-site",
    duration: "Jun 2023 - Jul 2023",
    startDate: "2023-06-01",
    description: [
      "Performed Data Collection using BeautifulSoup, developed models using Python, Tensorflow, scikit-learn",
      "Collaborated with Amrita Hospital and WNA-Amrita on a project that gained an impact factor of 5.1"
    ],
    technologies: ["Python", "TensorFlow", "scikit-learn", "BeautifulSoup"]
  }
]

export const education = {
  degree: "B.Tech in Information Technology",
  institution: "Jaypee University of Information Technology",
  location: "Solan, IN",
  duration: "Sep 2021 - Jun 2025",
  gpa: "8.8/10.0",
  coursework: [
    "Web Technology",
    "Operating Systems",
    "Computer Networks",
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Database Management Systems"
  ]
}

export const projects = [
  {
    id: 1,
    title: "Vulnerability Monitoring System",
    description: "Real-time vulnerability alert system with automated scans and Slack integration",
    longDescription: "Implemented real-time vulnerability alerts from NVD via Slack API, built scalable APIs, and automated scans with Celery Cron jobs. Provided on-demand and scheduled scans using FastAPI.",
    technologies: ["Python", "FastAPI", "Slack API", "Celery"],
    features: [
      "Real-time vulnerability alerts from NVD",
      "Automated scans with Celery Cron jobs",
      "On-demand and scheduled scans",
      "Callback routes for efficient interaction"
    ],
    github: "",
    live: "https://vulnerabilitynotificationautomation.onrender.com/",
    image: "/projects/vulnerability.png"
  },
  {
    id: 2,
    title: "JUIT Dispensary System",
    description: "Automated dispensary management system for JUIT with digital health cards",
    longDescription: "Automated JUIT Dispensary operations with Webkiosk-JUIT RESTful API, integrating digital health cards, WebRTC, Google Sheets API, and MongoDB. Built a user-friendly interface using NodeJS, React, and Socket.IO.",
    technologies: ["MERN Stack", "WebRTC", "Socket.IO", "Google Sheets API"],
    features: [
      "Digital health cards integration",
      "Real-time communication with WebRTC",
      "Automated appointment scheduling",
      "Integration with university systems"
    ],
    github: "https://github.com/shashwatsrii/US",
    live: "",
    image: "/projects/dispensary.png"
  },
  {
    id: 3,
    title: "Library Management Backend",
    description: "RESTful API for library management with FastAPI and MongoDB",
    longDescription: "Developed and deployed a basic CRUD LMS API using FastAPI and MongoDB Atlas, ensuring adherence to RESTful API specifications. Deployed using Docker and cloud hosting on Render.",
    technologies: ["FastAPI", "MongoDB", "Docker", "Render"],
    features: [
      "Complete CRUD operations",
      "RESTful API design",
      "MongoDB Atlas integration",
      "Containerized deployment"
    ],
    github: "",
    live: "https://fastapi-mongodb-s3sa.onrender.com/docs",
    image: "/projects/library.png"
  }
]

export const achievements = [
  "Rated 1704 at GeeksForGeeks",
  "Rated 1648 at LeetCode",
  "Zone Finalist - Tata Crucible '24",
  "2nd Place - Web-O-Fiesta (2/40 teams)",
  "1st Place - Hackathon'22 (1/180 teams)",
  "2nd Place - Expanse Hackathon (2/134 teams)",
  "1st Place - Suits at Startup Mania (1/30 teams)",
  "2nd Place - IEEE Impractical Ideation (2/35 teams)"
]

export const leadership = [
  {
    role: "Head of Corporate Relations",
    organization: "TIEDC - ECELL",
    description: "Led corporate partnerships and sponsorship initiatives"
  },
  {
    role: "Operations Manager",
    organization: "ACM - JUIT",
    description: "Managed technical events and workshops"
  }
]