import courseLightImage from './assets/images/onlineLearningLight.png';
import courseDarkImage from './assets/images/onlineLearningDark.png';
import quizDarkImage from './assets/images/quizDark.png';
import quizLightImage from './assets/images/quizLight.png';
import portfolioLightImage from './assets/images/portfolioLight.png';
import portfolioDarkImage from './assets/images/portfolioDark.png';
import gameDarkImage from './assets/images/gameDark.png';
import gameLightImage from './assets/images/gameLight.png';

const logotext = "RA";
const meta = {
    title: "Ramya Sri Achanta",
    description: "I'm Ramya, full stack software engineer studying in University of Houston-Clear Lake",
};

const introdata = {
    title: "I’m Ramya Sri Achanta",
    animated: {
        first: "I'm a Full-Stack Developer",
        second: "Graduate student at University of Houston-Clear Lake",
        third: "Member of Student Conduct Council - Hearing Board",
        fourth: "Graduate Teaching Assistant for Dr. Lisa Lacher and Dr.Ahmed Abukmail",
        fifth: "Experienced in software and web app development",
        sixth: "Skilled in backend services and DevOps",
    },
    description: "I'm a Computer Science graduate student at the University of Houston-Clear Lake, with experience in full-stack development, backend services, and DevOps. My roles as a Graduate Teaching Assistant and a member of the Student Conduct Council have strengthened my leadership and instructional skills. With a background in microservices, CI/CD pipelines, and system security, I’ve contributed to impactful projects in the tech industry. I’m passionate about developing scalable, secure solutions that address complex challenges and enhance user experience.",
};


const dataabout = {
    title: "A bit about myself",
    tagline: "A Full-Stack Developer Transforming Ideas into Scalable Solutions",
    aboutme: "I'm a Full Stack Developer and Computer Science graduate student at the University of Houston-Clear Lake, with hands-on experience across software engineering, backend development, and DevOps. I've worked extensively with microservices, CI/CD pipelines, and containerization, and I'm proficient in Golang, Kotlin, SQL, and Docker. My past roles include impactful projects in the tech and logistic sectors, where I contributed to multi-tenancy and SaaS architecture. I'm passionate about creating secure, scalable solutions and love diving into complex technical challenges.",
    beyond: "I mentor students, contribute to open-source projects, and enjoy exploring new technologies. I love finding elegant solutions to complex problems, whether in code, architecture, or system design. I love drawing, exploring AI tools, and playing badminton.",
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
    major1: "Master of Science in Computer Science",
    year1: "2024-2025",
    description2: "Amrita Vishwa Vidyapeetham, Coimbatore, India",
    major2: "Bachelor of Technology in Computer Science and Engineering",
    year2: "2018-2022",
};


const worktimeline = [
    {
        jobtitle: "Data Analyst Intern",
        where: "Titan Commercial",
        date: "July 2025 – Present",
    },
    {
        jobtitle: "ML Software Developer Intern",
        where: "Object Tech, Inc",
        date: "May 2025 – Present",
    },
    {
        jobtitle: "Student Conduct Council - Hearing Board Member",
        where: "University of Houston-Clear Lake",
        date: "October 2024 - Present",
    },
    {
        jobtitle: "Graduate Teaching Assistant",
        where: "University of Houston-Clear Lake",
        date: "September 2024 - Present",
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
        company: "Titan Commercial",
        role: "Data Analyst (Internship)",
        location: "Houston, TX",
        dates: "July 2025 – Present",
        summary: "Automated AWS-driven marketing workflows and built finance-ready BI dashboards.",
        tech: ["AWS", "Lambda", "ECS", "S3", "Power BI"],
        logo:"https://media.licdn.com/dms/image/v2/C560BAQGawRy47wjgeQ/company-logo_200_200/company-logo_200_200/0/1678562675824?e=1764201600&v=beta&t=oKlIQylNlSQcz0G6h1XB7kM3OK2kh5DhePAzauXRQRA",
        bullets: [
            "Designed and deployed automated AWS pipelines (Lambda, ECS, S3) integrated with Make, AutoCAD, and InDesign to auto‑generate property flyers and templates, cutting manual work from 8hrs to 60s for 50+ listings weekly.",
            "Built Power BI dashboards for receivables, property revenue, and KPIs to support finance leadership decisions in real time."
        ]
    },
    {
        company: "Object Tech, Inc",
        role: "ML Software Developer (Internship)",
        location: "Fremont, CA",
        dates: "May 2025 – Present",
        summary: "Shipped parsing pipeline and low‑latency RAG chatbot across serverless microservices.",
        tech: ["Python", "FastAPI", "Django", "AWS", "FAISS", "LLM"],
        logo:"https://media.licdn.com/dms/image/v2/D560BAQE8oWC_jtekVw/company-logo_200_200/company-logo_200_200/0/1736547207980/object_tech_inc_logo?e=1764201600&v=beta&t=2_l8Pz4fCtVNzbLJPd1zBnGzddUvMDybWg2Kxw0uMr8",
        bullets: [
            "Prototyped and shipped an OmniParser + API pipeline in Python (FastAPI/Django) on AWS Lambda & ECS to automate document/image parsing workflows.",
            "Designed and scaled APIs (OpenAPI/GraphQL) enabling consistent integration across microservices.",
            "Integrated a deep‑learning and RAG chatbot (FAISS + LLM streaming), reducing Q&A latency to <200ms and improving parsing accuracy by 40%."
        ]
    },
    {
        company: "Radar Ventures Private Limited / WIzFreight",
        role: "Software Development Engineer - I",
        location: "Chennai, India",
        dates: "Sep 2022 – Dec 2023",
        summary: "Maintained high‑availability logistics microservices and modernized dashboards to Next.js.",
        tech: ["Go", "gRPC", "REST", "Next.js", "PostgreSQL"],
        logo:"https://wizfreight.com/_next/image?url=%2FWIZ.svg&w=256&q=75",
        bullets: [
            "Developed and optimized Golang microservices (REST & gRPC) for logistics with 99.9% uptime handling 50K+ daily transactions.",
            "Led migration of 3+ product lines to Next.js, reducing dashboard load times by 20% for 5K+ daily users.",
            "Participated in Agile/Scrum, on‑call production support, ensuring scalability and reliability."
        ]
    },
    {
        company: "PricewaterhouseCoopers India (PwC)",
        role: "Risk Advisory (Internship)",
        location: "Hyderabad, India",
        dates: "Jan 2022 – Jul 2022",
        summary: "Automated DevSecOps checks reducing manual validation and speeding deployments.",
        tech: ["Python", "Automation", "DevSecOps"],
        logo:"https://media.licdn.com/dms/image/v2/D4E0BAQFVfAbYbmcpvA/company-logo_200_200/B4EZaB6j58H0AI-/0/1745936334912/pwc_logo?e=1764201600&v=beta&t=85Lu9rqXV7zbXOV-WDrHDJmvYK6OYaS9tqwI1G9PzbQ",
        bullets: [
            "Built Python automation for DevSecOps, reducing manual validation time by 60% and improving deployment efficiency."
        ]
    },
    {
        company: "Microsoft India (R&D) Pvt Ltd",
        role: "Software Engineer (Internship)",
        location: "Hyderabad, India",
        dates: "Jun 2021 – Aug 2021",
        summary: "Delivered Excel Online 'Show Changes' feature to enhance collaborative editing.",
        tech: ["React", "TypeScript", "Office 365"],
        logo: "https://media.licdn.com/dms/image/v2/D560BAQH32RJQCl3dDQ/company-logo_200_200/B56ZYQ0mrGGoAM-/0/1744038948046/microsoft_logo?e=1764201600&v=beta&t=KB6hf0a9t5ppjsZof4lGcyd31ASDeI0YOZCRIck-r54",
        bullets: [
            "Developed the 'Show Changes' feature in Excel Online using React.js, improving collaborative editing visibility for 2M+ users.",
            "Collaborated with PMs and QA to validate user flows for seamless integration into Microsoft Office 365."
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
            { name: "gRPC", value: 70 }
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
            { name: "Jenkins", value: 65 }
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
            { name: "Power Query", value: 75 }
        ]
    },
    {
        category: "Data & ML",
        items: [
            { name: "Scikit-learn", value: 80 },
            { name: "Pandas", value: 85 },
            { name: "NumPy", value: 85 },
            { name: "Matplotlib", value: 80 },
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
    title: "GHC 2025 RAG Agent",
    description: "A RAG (Retrieval-Augmented Generation) agent built using ChatGPT for Grace Hopper Celebration 2025 by AnitaB.org. A career accelerator, networking guide, and confidence partner for GHC attendees, providing strategic guidance and networking support.",
    technologies: ["ChatGPT", "RAG", "AI/ML", "Python", "NLP"],
    impact: "GHC 2025 Strategy Coach",
    link: "https://chatgpt.com/g/g-690b6928ac7481919c4a31d0a5f2b381-ghc-2025",
},
{
    imgLight:courseLightImage,
    imgDark:courseDarkImage,
    title: "Course Portal Application",
    description: "A comprehensive learning management system built with React and Node.js, featuring user authentication, course enrollment, and progress tracking for educational institutions.",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Express"],
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
