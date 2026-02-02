import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { meta, experience } from "../../content_option";
import resume from "../../Resume/RamyaSri_Achanta_Resume.pdf";

export const Experience = () => {
  return (
      <HelmetProvider>
        <Container className="Experience-section">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Experience | {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>

          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Experience</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
            <Col lg="4" className="d-flex align-items-start justify-content-lg-end">
              <a href={resume} target="_blank" rel="noreferrer" className="cta cta--ghost">
                View Resume
              </a>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              {experience.map((job, i) => (
                  <Card key={i} className="exp-card mb-4">
                    <Card.Body>
                      <div className="exp-header">
                        <div className="exp-header-left">
                          {job.logo && (
                              <img 
                                src={job.logo} 
                                alt={`${job.company} logo`} 
                                className={`company-logo ${job.company.includes("Radar Ventures") || job.company.includes("Wiz") ? "logo-small" : ""}`}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                                loading="lazy"
                              />
                          )}
                          <div className="exp-header-content">
                            <h4 className="mb-1"><b>{job.role}</b></h4>
                            <div className="company-text">{job.company}</div>
                          </div>
                        </div>
                        <div className="date-location">
                          <div className="dates">{job.dates}</div>
                          <div className="location">{job.location}</div>
                        </div>
                      </div>
                      {job.summary && (
                          <p className="exp-summary">{job.summary}</p>
                      )}
                      {Array.isArray(job.tech) && job.tech.length > 0 && (
                          <div className="exp-tags mb-2">
                            {job.tech.map((t, idx) => (
                                <Badge bg="secondary" key={idx} className="me-1">{t}</Badge>
                            ))}
                          </div>
                      )}
                      <ul className="exp-list">
                        {job.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
  );
};

export default Experience;


