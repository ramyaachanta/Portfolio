import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  dataabout,
  meta,
  education,
  worktimeline,
  skills,
} from "../../content_option";
import profilePic from "../../images/profilepic.jpg";


export const About = () => {
  return (
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> About | {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>

          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">About me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>

          <Row className="sec_sp about-main align-items-start">
            <Col lg="6" className="about-left">
              <div className="profile-image-wrapper">
                <div className="profile-image-container">
                  <img 
                    src={profilePic} 
                    alt="Ramya Sri Achanta" 
                    className="profile-image-circular"
                  />
                </div>
              </div>
              <h2 className="about-tagline">{dataabout.tagline}</h2>
              <p className="about-text">{dataabout.aboutme}</p>
            </Col>
            <Col lg="6" className="about-right">
              <div className="achievements-grid">
                {dataabout.achievements.map((achievement, index) => (
                  <Card key={index} className={`achievement-card achievement-${index + 1}`}>
                    <Card.Body>
                      <div className="achievement-value">{achievement.value}</div>
                      <div className="achievement-label">{achievement.label}</div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
              <Card className="beyond-card mt-4">
                <Card.Body>
                  <p className="beyond-text">{dataabout.beyond}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="5" md="12">
              <h3 className="section-title">{education.title}</h3>
            </Col>
            <Col lg="7" md="12">
              <div>
                <div className="education-item mb-3">
                  <h5><b>{education.description1}</b></h5>
                  <p>{education.major1}</p>
                  <div className="date-text">
                    <p>{education.year1}</p>
                  </div>
                </div>
                <div className="education-item mb-3">
                  <h5><b>{education.description2}</b></h5>
                  <p>{education.major2}</p>
                  <div className="date-text">
                    <p>{education.year2}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="5" md="12">
              <h3 className="section-title">Work Timeline</h3>
            </Col>
            <Col lg="7" md="12">
              <div>
                {worktimeline.map((data, i) => (
                    <div key={i} className="work-item mb-3">
                      <h5><b>{data.jobtitle}</b></h5>
                      <p><b>{data.where}</b></p>
                      <div className="date-text">
                        <p>{data.date}</p>
                      </div>
                    </div>
                ))}
              </div>
            </Col>
          </Row>



          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="section-title">Skills</h3>
            </Col>
            <Col lg="7">
              <Row>
                {skills.map((category, index) => (
                    <Col md="6" key={index} className="mb-4">
                      <Card className="h-100">
                        <Card.Body>
                          <Card.Title>{category.category}</Card.Title>
                          {category.items.map((data, i) => (
                              <div key={i}>
                                <h5 className="progress-title">{data.name}</h5>
                                <div className="progress">
                                  <div
                                      className="progress-bar"
                                      style={{
                                        width: `${data.value}%`,
                                      }}
                                  >
                                    <div className="progress-value">
                                      {data.value}%
                                    </div>
                                  </div>
                                </div>
                              </div>
                          ))}
                        </Card.Body>
                      </Card>
                    </Col>
                ))}
              </Row>
            </Col>
          </Row>

        </Container>
      </HelmetProvider>
  );
};
