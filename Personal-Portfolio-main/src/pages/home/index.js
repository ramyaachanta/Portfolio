import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Link } from "react-router-dom";
import resume from '../../../src/Resume/A_Ramya_Resume.pdf';
import { SiMysql, SiAmazonwebservices, SiPython, SiReact, SiDocker } from "react-icons/si";
import { FiActivity, FiBarChart2, FiCloud } from "react-icons/fi";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="impact-hero">
          <div className="impact-hero__inner">
            <h1 className="impact-hero__title"><span className="accent">Yas,</span> I'm Ramya</h1>
            <h2 className="impact-hero__subtitle">The Full‑Stack Developer</h2>
            <p className="impact-hero__desc">
              A CS graduate with an engineering mindset, I specialize in transforming complex
              problems into clear strategy and measurable results through modern full‑stack
              development and data‑driven systems.
            </p>
            <div className="impact-hero__actions">
              <Link to="/contact" className="cta cta--primary">Let's Connect</Link>
              <Link to="/projects" className="cta cta--ghost">See My Work</Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
