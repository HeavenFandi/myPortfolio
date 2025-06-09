import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import useContact from "../hooks/useContact";

export const Contact = () => {
  const { handleSubmit, buttonText, status, onFormUpdate, formDetails } =
    useContact();

 
  const [errors, setErrors] = useState({});


  const validate = () => {
    const newErrors = {};

    if (!formDetails.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formDetails.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formDetails.email.trim()) {
      newErrors.email = "Email is required";
    } else {
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formDetails.email)) {
        newErrors.email = "Email is invalid";
      }
    }
    if (formDetails.phone.trim()) {

      const phoneRegex = /^[0-9]+$/;
      if (!phoneRegex.test(formDetails.phone)) {
        newErrors.phone = "Phone number must contain digits only";
      }
    }
    if (!formDetails.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

 
    return Object.keys(newErrors).length === 0;
  };

  
  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(e);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={onSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate("firstName", e.target.value)}
                          className={errors.firstName ? "input-error" : ""}
                        />
                        {errors.firstName && (
                          <div className="error-message">{errors.firstName}</div>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate("lastName", e.target.value)}
                          className={errors.lastName ? "input-error" : ""}
                        />
                        {errors.lastName && (
                          <div className="error-message">{errors.lastName}</div>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                          className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && (
                          <div className="error-message">{errors.email}</div>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone Number"
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                          className={errors.phone ? "input-error" : ""}
                        />
                        {errors.phone && (
                          <div className="error-message">{errors.phone}</div>
                        )}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                          className={errors.message ? "input-error" : ""}
                        ></textarea>
                        {errors.message && (
                          <div className="error-message">{errors.message}</div>
                        )}
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                        {status.message && (
                          <Col className="mt-3">
                            <div role="alert">{status.message}</div>
                          </Col>
                        )}
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

