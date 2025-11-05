import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Projects = () => {
  return (
      <HelmetProvider>
        <Container className="projects-container">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Projects | {meta.title} </title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <div className="section-pill">ACADEMIC EXCELLENCE</div>
              <h1 className="projects-title">Academic Projects That Matter</h1>
              <hr className="projects-divider" />
            </Col>
          </Row>
          <div className="projects-grid">
            {dataportfolio.map((data, i) => {
              return (
                  <div key={i} className="project-card">
                    <div className="project-content">
                      <h3 className="project-title">{data.title}</h3>
                      <p className="project-description">{data.description}</p>
                      <div className="project-tags">
                        {data.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="project-impact">
                        <span className="impact-tag">{data.impact}</span>
                      </div>
                      <a 
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button"
                      >
                        Open Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </a>
                    </div>
                  </div>
              );
            })}
          </div>
        </Container>
      </HelmetProvider>
  );
};
