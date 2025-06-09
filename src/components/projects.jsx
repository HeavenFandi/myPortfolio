import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = {
    vanilla: [
      {
        title: "Loan Calculator",
        description: "JavaScript | DOM Logic",
        imgUrl: projImg3,
        gitUrl: "https://github.com/HeavenFandi/loan-calculator",
      },
      {
        title: "CRUD Players App",
        description: "HTML, CSS, JavaScript | Create, Read, Update, Delete",
        imgUrl: projImg2,
        gitUrl: "https://github.com/HeavenFandi/CRUD-Players",
      },
    ],
    react: [
      {
        title: "e-Commerce Website",
        description: "React | TypeScript | Responsive UI",
        imgUrl: projImg2,
        gitUrl: "https://github.com/HeavenFandi/E-commerce",
      },
      {
        title: "Bug Bounty Syria",
        description: "React | Cybersecurity Theme",
        imgUrl: projImg3,
        gitUrl: "https://github.com/HeavenFandi/bugbountysyria",
      },
      {
        title: "My Portfolio",
        description: "React | Personal Branding",
        imgUrl: projImg2,
        gitUrl: "https://github.com/HeavenFandi/portfolio",
      },
    ],
    personal: [
      {
        title: "Barcelona Fan Club",
        description: "HTML & CSS | Static Design",
        imgUrl: projImg1,
        gitUrl: "https://github.com/HeavenFandi/barcelona-club",
      },
      {
        title: "Book Store App",
        description: "JavaScript | Frontend",
        imgUrl: projImg1,
        gitUrl: "https://github.com/HeavenFandi/book-store-app",
      },
    ],
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the personal and professional projects I
                    worked on using JavaScript, React, and more.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="second">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Vanilla JS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Personal</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.vanilla.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.react.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.personal.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
