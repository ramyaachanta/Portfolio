import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../content_option";
import resume from '../Resume/RamyaSri_Achanta_Resume.pdf';
import { SiMysql, SiAmazonwebservices, SiPython, SiReact, SiDocker, SiJavascript, SiNodedotjs, SiMongodb, SiPostgresql, SiGit, SiGithub, SiKubernetes } from "react-icons/si";
import { FiActivity, FiBarChart2, FiCloud } from "react-icons/fi";
import { About } from "./about";
import { Projects } from "./projects";
import { ContactUs } from "./contact";
import { Socialicons } from "../components/socialicons";
import Typewriter from "typewriter-effect";
import "./home/style.css";
import "./about/style.css";
import "./projects/style.css";
import "./contact/style.css";
import "./Portfolio.css";

const Portfolio = () => {
  const greetings = [
    "Hello,",
    "Hola,",
    "Bonjour,",
    "Ciao,",
    "Namaste,",
    "こんにちは,",
    "안녕하세요,",
    "مرحبا,",
    "Olá,",
    "Hallo,",
    "Xin chào,",
    "Hej,"
  ];
  return (
    <HelmetProvider>
      <div className="portfolio-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Hero Section */}
        <section id="home" className="impact-hero">
          <div className="impact-hero__inner">
            <h1 className="impact-hero__title">
              <span className="accent">
                <Typewriter
                  options={{
                    strings: greetings,
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    deleteSpeed: 40,
                    pauseFor: 2000
                  }}
                />
              </span>
              <span> I'm Ramya</span>
            </h1>
            <h2 className="impact-hero__subtitle">The Full‑Stack Developer</h2>
            <p className="impact-hero__desc">
              A CS graduate with an engineering mindset, I specialize in transforming complex
              problems into clear strategy and measurable results through modern full‑stack
              development and data‑driven systems.
            </p>
            <div className="impact-hero__actions">
                <a href={resume} download="RamyaSri_Achanta_Resume.pdf" className="cta cta--primary">Download Resume</a>
              <a href="#contact" className="cta cta--ghost">Let's Connect</a>
            </div>

            <div className="techstack">
              <div className="techstack__label">TECH STACK</div>
              <div className="techstack__card">
                <div className="chip"><SiMysql /><span>MySQL</span></div>
                <div className="chip"><SiAmazonwebservices /><span>AWS</span></div>
                <div className="chip"><FiActivity /><span>Power BI</span></div>
                <div className="chip"><FiBarChart2 /><span>Analytics</span></div>
                <div className="chip"><FiCloud /><span>Azure</span></div>
                <div className="chip"><SiPython /><span>Python</span></div>
                <div className="chip"><SiReact /><span>React</span></div>
                <div className="chip"><SiDocker /><span>Docker</span></div>
                <div className="chip"><SiJavascript /><span>JavaScript</span></div>
                <div className="chip"><SiNodedotjs /><span>Node.js</span></div>
                <div className="chip"><SiMongodb /><span>MongoDB</span></div>
                <div className="chip"><SiPostgresql /><span>PostgreSQL</span></div>
                <div className="chip"><SiGit /><span>Git</span></div>
                <div className="chip"><SiGithub /><span>GitHub</span></div>
                <div className="chip"><SiKubernetes /><span>Kubernetes</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <ContactUs />
        </section>

        {/* Social Icons */}
        <Socialicons />
      </div>
    </HelmetProvider>
  );
};

export default Portfolio;
