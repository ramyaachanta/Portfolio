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
    aboutme: "I’m a Full Stack Developer and Computer Science graduate student at the University of Houston-Clear Lake, with hands-on experience across software engineering, backend development, and DevOps. I've worked extensively with microservices, CI/CD pipelines, and containerization, and I'm proficient in Golang, Kotlin, SQL, and Docker. My past roles include impactful projects in the tech and logistic sectors, where I contributed to multi-tenancy and SaaS architecture. I'm passionate about creating secure, scalable solutions and love diving into complex technical challenges. Outside of work, I enjoy learning new technologies and expanding my skills.",
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
        where: "WIZ",
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


const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "Java", value: 90 },
            { name: "Python", value: 85 },
            { name: "JavaScript", value: 85 },
            { name: "GoLang", value: 80 },
            { name: "Kotlin", value: 75 }
        ]
    },
    {
        category: "Frontend Development",
        items: [
            { name: "HTML", value: 80 },
            { name: "CSS", value: 80 },
            { name: "React JS", value: 85 },
            { name: "Angular", value: 75 },
            { name: "Tailwind CSS", value: 70 }
        ]
    },
    {
        category: "Backend Development",
        items: [
            { name: "Django", value: 80 },
            { name: ".Net", value: 75 },
            { name: "Node JS", value: 80 },
            { name: "gRPC", value: 70 },
            { name: "RESTful API", value: 85 }
        ]
    },
    {
        category: "DevOps and Cloud",
        items: [
            { name: "Docker", value: 75 },
            { name: "ArgoCD", value: 70 },
            { name: "Jenkins", value: 70 },
            { name: "Git", value: 85 }
        ]
    },
    {
        category: "Tools and Databases",
        items: [
            { name: "PostgreSQL", value: 80 },
            { name: "MySQL", value: 85 },
            { name: "MongoDB", value: 75 },
            { name: "Postman", value: 75 },
            { name: "SonarCube", value: 70 }
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
    description: "Course Portal Application\n ",

    link: "https://github.com/ramyaachanta/Course-Portal",
},
   
{
    imgLight: quizLightImage,
    imgDark: quizDarkImage,
    description: "Quizter",
    link: "https://github.com/DhivakarK-git/Quizter",
},
{
    imgLight: portfolioLightImage,
    imgDark: portfolioDarkImage,
    description: "Professional Portfolio",
    link: "https://github.com/ramyaachanta/Portfolio",
},
{
    imgLight: gameLightImage,
    imgDark: gameDarkImage,
    description: "Tic Tac Toe Game",
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
    YOUR_TEMPLATE_ID: "template_3d7nqgu",
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
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};