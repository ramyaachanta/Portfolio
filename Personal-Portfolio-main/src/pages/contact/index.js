import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata((prevState) => ({ ...prevState, loading: true }));

    // Email to Yourself (Receiving User's Message)
    const adminTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: contactConfig.YOUR_EMAIL, // Your email to receive it
    };

    // Auto-Reply to the Sender
    const userTemplateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,

    };

    // Send Email to Yourself (Receiving User's Message)
    emailjs.send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.ADMIN_TEMPLATE,  // Admin template ID
        adminTemplateParams,
        contactConfig.YOUR_USER_ID
    )
    .then(
        (result) => {
            console.log("Admin Email Sent:", result.text);

            // Send Auto-Reply Email to the Sender
            return emailjs.send(
                contactConfig.YOUR_SERVICE_ID,
                contactConfig.AUTO_REPLY_TEMPLATE, // User auto-reply template ID
                userTemplateParams,
                contactConfig.YOUR_USER_ID
            );
        }
    )
    .then(
        (result) => {
            console.log("User Auto-Reply Sent:", result.text);
            setFormdata((prevState) => ({
                ...prevState,
                loading: false,
                alertmessage: "SUCCESS! Thank you for your message.",
                variant: "success",
                show: true,
                email: "",
                name: "",
                message: "",
            }));
        }
    )
    .catch((error) => {
        console.log("Error:", error.text);
        setFormdata((prevState) => ({
            ...prevState,
            loading: false,
            alertmessage: `Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
        }));
    });
};


  const handleChange = (e) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() =>
                setFormdata((prevState) => ({ ...prevState, show: false }))
              }
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.YOUR_FONE && (
                <strong>
                  Phone:{" "}
                  <a href={`tel:${contactConfig.YOUR_FONE}`}>
                    {contactConfig.YOUR_FONE}
                  </a>
                </strong>
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" disabled={formData.loading}>
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
