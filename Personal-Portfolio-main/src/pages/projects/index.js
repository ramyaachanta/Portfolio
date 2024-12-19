import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Projects = () => {
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme"));

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    };

    // Add event listener to detect theme changes
    window.addEventListener("themechange", handleThemeChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  return (
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Projects | {meta.title} </title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Projects </h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <div className="mb-5 po_items_ho">
            {dataportfolio.map((data, i) => {
              const imgSrc = theme === "dark" ? data.imgDark : data.imgLight;
              return (
                  <div key={i} className="po_item">
                    <img src={imgSrc} alt={data.description} />
                    <p className="description-text">{data.description}</p> {/* Description displayed below image */}
                    <div className="content">
                      <p className="description-inline">{data.description}</p>
                      <a href={data.link}
                         target="_blank"
                         rel="noopener noreferrer"
                      >View Project</a>
                    </div>
                  </div>
              );
            })}
          </div>
        </Container>
      </HelmetProvider>
  );
};
