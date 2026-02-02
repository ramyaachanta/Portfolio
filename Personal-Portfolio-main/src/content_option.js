import courseLightImage from './assets/images/onlineLearningLight.png';
import courseDarkImage from './assets/images/onlineLearningDark.png';
import quizDarkImage from './assets/images/quizDark.png';
import quizLightImage from './assets/images/quizLight.png';
import portfolioLightImage from './assets/images/portfolioLight.png';
import portfolioDarkImage from './assets/images/portfolioDark.png';
import gameDarkImage from './assets/images/gameDark.png';
import gameLightImage from './assets/images/gameLight.png';

// Company logos
import reboundDynamicsLogo from './images/reboundynamics_logo.jpeg';
import objectTechLogo from './images/object_tech_inc_logo.jpeg';
import wizLogo from './images/wizfreight_logo.jpeg';
import pwcLogo from './images/pwc_india_logo.jpeg';
import microsoftLogo from './images/microsoft_logo.jpeg';
import titanLogo from './images/titantexas_logo.jpeg';


const logotext = "RA";
const meta = {
    title: "Ramya Sri Achanta",
    description: "Senior Software Engineer with 2+ years of experience building scalable backend systems, microservices, and AI-powered platforms",
};

const introdata = {
    title: "I'm Ramya Sri Achanta",
    animated: {
        first: "I'm a Senior Software Engineer",
        second: "Building scalable backend systems & AI-powered platforms",
        third: "Expert in microservices, distributed systems & cloud infrastructure",
        fourth: "Passionate about reliable, intelligent systems at scale",
        fifth: "Experienced in Python, Go, and AI/ML technologies",
        sixth: "Skilled in LLMs, RAG pipelines, and vision-language models",
    },
    description: "Senior Software Engineer with 2+ years of experience building scalable backend systems, microservices, and AI-powered platforms. Strong in Python, Go, distributed systems, and cloud infrastructure (AWS, Azure). Proven experience designing transactional systems and integrating LLMs, RAG pipelines, and vision-language models into production workflows. Passionate about building reliable, intelligent systems at scale.",
};


const dataabout = {
    title: "A bit about myself",
    tagline: "Senior Software Engineer Building Scalable Systems & AI-Powered Platforms",
    aboutme: "Senior Software Engineer with 2+ years of experience building scalable backend systems, microservices, and AI-powered platforms. Strong expertise in Python, Go, distributed systems, and cloud infrastructure (AWS, Azure). Proven experience designing transactional systems and integrating LLMs, RAG pipelines, and vision-language models into production workflows. Passionate about building reliable, intelligent systems at scale with strong availability, fault tolerance, and production reliability guarantees.",
    beyond: "I mentor developers, contribute to open-source projects, and enjoy exploring cutting-edge AI technologies. I love finding elegant solutions to complex problems, whether in code, architecture, or system design. I'm passionate about drawing, exploring AI tools, and playing badminton.",
    achievements: [
        { value: "50K+", label: "Daily Transactions Processed" },
        { value: "99.9%", label: "System Uptime Maintained" },
        { value: "3+", label: "Product Lines Migrated" },
        { value: "2M+", label: "Users Impacted" }
    ]
};

const education = {
    title: "Education",
    description1: "University of Houston-Clear Lake, Houston, TX",
    major1: "Master of Science in Computer Science (GPA: 3.84/4.0)",
    year1: "2024-2025",
    description2: "Amrita Vishwa Vidyapeetham, Coimbatore, India",
    major2: "Bachelor of Technology in Computer Science and Engineering (GPA: 3.05/4.0)",
    year2: "2018-2022",
};


const worktimeline = [
    {
        jobtitle: "Senior Software Developer",
        where: "Rebound Dynamics",
        date: "Jan 2026 – Present",
    },
    {
        jobtitle: "Data Analyst Intern",
        where: "Titan Commercial",
        date: "July 2025 – Dec 2025",
    },
    {
        jobtitle: "ML Software Developer Intern",
        where: "Object Tech, Inc",
        date: "May 2025 – Dec 2025",
    },
    {
        jobtitle: "Student Conduct Council - Hearing Board Member",
        where: "University of Houston-Clear Lake",
        date: "October 2024 - December 2025",
    },
    {
        jobtitle: "Graduate Teaching Assistant",
        where: "University of Houston-Clear Lake",
        date: "September 2024 - May 2025",
    },
    {
        jobtitle: "Full Stack Developer",
        where: "Radar Ventures Private Limited / Wiz",
        date: "September 2022 - December 2023",
    },
    {
        jobtitle: "Risk Consultant Intern",
        where: "PwC India",
        date: "January 2022 - July 2022",
    },
    {
        jobtitle: "Software Engineer Intern",
        where: "Microsoft",
        date: "June 2021 - July 2021",
    },
    {
        jobtitle: "TED Intern",
        where: "Qentelli",
        date: "June 2020 - April 2021",
    },
];


const experience = [
    {
        company: "Rebound Dynamics",
        role: "Senior Software Developer",
        location: "Houston, TX",
        dates: "Jan 2026 – Present",
        summary: "Architected scalable inventory management system with real-time stock visibility and warehouse operations.",
        tech: ["Microservices", "REST APIs", "Transactional Systems", "System Design", "SDLC"],
        logo: reboundDynamicsLogo,
        bullets: [
            "Architected and delivered a scalable inventory management system with real-time stock visibility, SKU lifecycle tracking, and warehouse operations.",
            "Designed backend microservices, transactional data flows, REST APIs to support inventory reconciliation, replenishment workflows, & auditability.",
            "Owned end-to-end SDLC including system design, sprint planning, technical decision-making, code reviews, deployments, and production support.",
            "Led technical mentorship & enforced coding standards, automated testing, documentation to ensure performance, reliability & long-term scalability.",
            "Supported high-throughput operations by designing low-latency services with strong availability, fault tolerance & production reliability guarantees."
        ]
    },
    {
        company: "Titan Commercial",
        role: "Data Analyst (Internship)",
        location: "Houston, TX",
        dates: "July 2025 – Present",
        summary: "Automated AWS-driven marketing workflows and built finance-ready BI dashboards.",
        tech: ["AWS", "Lambda", "ECS", "S3", "Power BI"],
        logo: titanLogo,
        bullets: [
            "Designed and deployed automated AWS pipelines (Lambda, ECS, S3) integrated with Make, AutoCAD, and InDesign to auto‑generate property flyers and templates, cutting manual work from 8hrs to 60s for 50+ listings weekly.",
            "Built Power BI dashboards for receivables, property revenue, and KPIs to support finance leadership decisions in real time."
        ]
    },
    {
        company: "Object Tech, Inc",
        role: "ML Software Developer (Internship)",
        location: "Fremont, CA",
        dates: "May 2025 – Dec 2025",
        summary: "Built multimodal LLM → OmniParser → action execution pipeline enabling autonomous UI interaction.",
        tech: ["Python", "LLMs", "OmniParser", "RAG", "FAISS", "OpenAPI", "GraphQL", "AWS"],
        logo: objectTechLogo,
        bullets: [
            "Built a multimodal LLM → OmniParser → action execution pipeline enabling autonomous UI interaction via schema-constrained instructions.",
            "Designed prompt orchestration workflows to generate deterministic action plans with tool-calling-like behavior (click, type, hover, app-switch).",
            "Implemented validation layers, fallback prompts, and guardrail logic to reduce hallucinations and improve parsing reliability by 40%.",
            "Developed scalable APIs (OpenAPI/GraphQL) for agent interaction across distributed microservices.",
            "Optimized real-time Q&A with streaming LLM responses and FAISS-based retrieval achieving less than 200ms latency."
        ]
    },
    {
        company: "Radar Ventures Private Limited / WIzFreight",
        role: "Software Development Engineer - I",
        location: "Chennai, India",
        dates: "Sep 2022 – Dec 2023",
        summary: "Maintained high‑availability logistics microservices and modernized dashboards to Next.js.",
        tech: ["Go", "gRPC", "REST", "Next.js", "PostgreSQL"],
        logo: wizLogo,
        bullets: [
            "Developed and optimized Golang microservices (REST & gRPC) for logistics with 99.9% uptime handling 50K+ daily transactions.",
            "Led migration of 3+ product lines to Next.js, reducing dashboard load times by 20% for 5K+ daily users.",
            "Participated in Agile/Scrum, on‑call production support, ensuring scalability and reliability."
        ]
    },
    {
        company: "PricewaterhouseCoopers India (PwC)",
        role: "DevSecOps (Internship)",
        location: "Hyderabad, India",
        dates: "Jan 2022 – Jul 2022",
        summary: "Automated DevSecOps checks reducing manual validation and speeding deployments.",
        tech: ["Python", "Automation", "DevSecOps"],
        logo: pwcLogo,
        bullets: [
            "Built Python automation tools for DevSecOps workflows, reducing manual validation time by 60% for any kind of workflow."
        ]
    },
    {
        company: "Microsoft India (R&D) Pvt Ltd",
        role: "Software Engineer (Internship)",
        location: "Hyderabad, India",
        dates: "Jun 2021 – Aug 2021",
        summary: "Delivered Excel Online 'Show Changes' feature to enhance collaborative editing.",
        tech: ["React", "TypeScript", "Office 365"],
        logo: microsoftLogo,
        bullets: [
            "Expanding the 'Show Changes' feature in Excel Online using React.js, enhancing collaborative editing visibility for over 2M+ users.",
            "Collaborated with product managers and QA teams to test and validate user flows for seamless integration into Microsoft Office 365."
        ]
    }
];


const skills = [
     {
        category: "Programming Languages",
        items: [
            { name: "Go", value: 85 },
            { name: "Python", value: 90 },
            { name: "Java", value: 80 },
            { name: "JavaScript", value: 85 },
            { name: "C++", value: 75 },
            { name: "Kotlin", value: 70 },
            { name: "C# .NET Core", value: 75 },
            { name: "UNIX", value: 70 }
        ]
    },
    {
        category: "Frontend Development",
        items: [
            { name: "React.js", value: 90 },
            { name: "Next.js", value: 85 },
            { name: "Angular", value: 70 },
            { name: "Tailwind CSS", value: 80 },
            { name: "HTML", value: 85 },
            { name: "CSS", value: 85 }
        ]
    },
    {
        category: "Backend Development",
        items: [
            { name: "Django", value: 85 },
            { name: "Spring Boot", value: 75 },
            { name: "Flask", value: 80 },
            { name: "Node.js", value: 80 },
            { name: "RESTful API", value: 85 },
            { name: "gRPC", value: 70 },
            { name: "GraphQL", value: 75 },
            { name: "WebSocket", value: 70 }
        ]
    },
    {
        category: "DevOps and Cloud",
        items: [
            { name: "Docker", value: 80 },
            { name: "AWS", value: 85 },
            { name: "Microsoft Azure", value: 75 },
            { name: "GCP", value: 70 },
            { name: "GitHub Actions", value: 70 },
            { name: "Jenkins", value: 65 },
            { name: "Distributed Systems", value: 85 },
            { name: "Microservices", value: 85 },
            { name: "Transactional Systems", value: 80 }
        ]
    },
    {
        category: "Tools and Databases",
        items: [
            { name: "PostgreSQL", value: 85 },
            { name: "MySQL", value: 85 },
            { name: "MongoDB", value: 80 },
            { name: "SQLite", value: 75 },
            { name: "Power BI", value: 85 },
            { name: "Power Query", value: 75 },
            { name: "Visual Studio", value: 80 },
            { name: "PyCharm", value: 85 },
            { name: "Anaconda", value: 80 },
            { name: "Figma", value: 75 },
            { name: "PyTest", value: 80 },
            { name: "JUnit", value: 75 },
            { name: "Jest", value: 75 },
            { name: "Apache", value: 70 },
            { name: "Nginx", value: 70 }
        ]
    },
    {
        category: "Data & ML",
        items: [
            { name: "PyTorch", value: 80 },
            { name: "TensorFlow", value: 75 },
            { name: "Scikit-learn", value: 80 },
            { name: "Pandas", value: 85 },
            { name: "NumPy", value: 85 },
            { name: "Matplotlib", value: 80 },
            { name: "LLMs", value: 85 },
            { name: "RAG", value: 85 },
            { name: "Prompt Engineering", value: 85 },
            { name: "Vision-Language Models", value: 80 },
            { name: "OmniParser", value: 80 },
            { name: "OCR", value: 75 },
            { name: "Embeddings", value: 80 },
            { name: "NLP", value: 75 },
            { name: "Neural Networks", value: 70 }
        ]
    },
    {
        category: "Soft Skills",
        items: [
            { name: "Customer Relationship Management (CRM)", value: 80 },
            { name: "Communication", value: 85 },
            { name: "Problem Solving", value: 85 }
        ]
    }
];


const dataportfolio = [{
    imgLight:courseLightImage,
    imgDark:courseDarkImage,
    title: "AI Form Filling Assistant (Vision-Language + UI Automation)",
    description: "Developed an AI assistant that interprets form screenshots using GPT-4o Vision to detect fields, labels, input types, dropdowns, and required actions with high accuracy. Built a structured JSON-based action generation pipeline (type, click, select, scroll) executed via Playwright to autonomously complete multi-step online forms. Implemented OCR text extraction, confidence scoring, fallback prompts, and user confirmation loops to ensure reliability, prevent hallucinations, and support safe auto-submission.",
    technologies: ["GPT-4o Vision", "Playwright", "OCR", "Python", "JSON", "UI Automation"],
    impact: "High Accuracy Form Detection",
    link: "https://github.com/ramyaachanta/ai-form-filling-assistant",
},
{
    imgLight:courseLightImage,
    imgDark:courseDarkImage,
    title: "GHC 2025 RAG Agent",
    description: "A RAG (Retrieval-Augmented Generation) agent built using ChatGPT for Grace Hopper Celebration 2025 by AnitaB.org. A career accelerator, networking guide, and confidence partner for GHC attendees, providing strategic guidance and networking support.",
    technologies: ["ChatGPT", "RAG", "AI/ML", "Python", "Prompt Engineering"],
    impact: "GHC 2025 Strategy Coach",
    link: "https://chatgpt.com/g/g-690b6928ac7481919c4a31d0a5f2b381-ghc-2025",
},
{
    imgLight:courseLightImage,
    imgDark:courseDarkImage,
    title: "Course Portal Application",
    description: "A comprehensive learning management system built with Python Django, featuring user authentication, course enrollment, and progress tracking for educational institutions.",
    technologies: ["Python", "Django", "PostgreSQL", "JWT", "React"],
    impact: "500+ Students Enrolled",
    link: "https://github.com/ramyaachanta/Course-Portal",
},
   
{
    imgLight: quizLightImage,
    imgDark: quizDarkImage,
    title: "Quizter",
    description: "An interactive quiz platform with real-time scoring, multiple question types, and analytics dashboard for educators and students.",
    technologies: ["React", "JavaScript", "CSS3", "Local Storage", "Responsive Design"],
    impact: "95% User Satisfaction",
    link: "https://github.com/DhivakarK-git/Quizter",
},
{
    imgLight: portfolioLightImage,
    imgDark: portfolioDarkImage,
    title: "Professional Portfolio",
    description: "A modern, responsive portfolio website showcasing projects and skills with dark/light theme toggle and smooth animations.",
    technologies: ["React", "CSS3", "JavaScript", "React Router", "EmailJS"],
    impact: "Mobile-First Design",
    link: "https://github.com/ramyaachanta/Portfolio",
},
{
    imgLight: gameLightImage,
    imgDark: gameDarkImage,
    title: "Mars Colonization Game",
    description: "A strategic space exploration game built with modern web technologies, featuring resource management and multiplayer capabilities.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API", "Game Logic"],
    impact: "Multiplayer Support",
    link: "https://github.com/Chinnu2000/Mars-colonization",
}

];


const testimonials = [{
    name: "laal",
    title: "lala",
    description: "\"lala \""
},

];

const contactConfig = {
    YOUR_EMAIL: "ramyaachanta23@gmail.com",
    YOUR_FONE: "(346)-526-1097",
    description: "Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me.",
    YOUR_SERVICE_ID: "service_lcyxvyc",
    AUTO_REPLY_TEMPLATE: "template_3d7nqgu",
    ADMIN_TEMPLATE:"template_ffw9n13",
    YOUR_USER_ID: "Ryitj2rXLhwfaij0K",

};

const socialprofils = {
    github: "https://github.com/ramyaachanta",
    linkedin: "https://www.linkedin.com/in/ramyaachanta/",
};
export {
    meta,
    dataabout,
    testimonials,
    education,
    worktimeline,
    experience,
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
