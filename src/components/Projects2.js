import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import eng1 from "../assets/projects/eng1.gif";
import eng2 from "../assets/projects/eng2.gif";
import eng3 from "../assets/projects/eng3.gif";
import eng4 from "../assets/projects/eng4.gif";
import eng5 from "../assets/projects/eng5.gif";
import swa1 from "../assets/projects/swa1.gif";
import swa2 from "../assets/projects/swa2.gif";
import swa3 from "../assets/projects/swa3.gif";
import swa4 from "../assets/projects/swa4.gif";
import swa5 from "../assets/projects/swa5.gif";
const Projects = () => {

  return (
    <Container style={{ marginTop: "5em" }}>
      <div className="ProjectSection">
        <Container>
          <Row className="projectrow">
            <Col md="6">
              <h4 className="projectname" >
                English Listening Test Application
              </h4>
              <p className="projectInfo">
                Developed an application for listening and reading tests in the
                English lab using MERN Stack. The teachers can add tests, preview them, add students and view test results.
                Students can login with their credentials and take the tests that have been assigned to them.
              </p>
            </Col>
            <Col md="6">
              <Carousel interval={null} className="projectCarousel">
                <Carousel.Item >
                  <img alt="Project" src={eng1}></img>
                  <figcaption>Add Test</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={eng2}></img>
                  <figcaption>Preview Test</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={eng3}></img>
                  <figcaption>Student Test Interface</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={eng4}></img>
                  <figcaption>View Attempt</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={eng5}></img>
                  <figcaption>Report Card</figcaption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row className="projectrow">
            <Col md="6">
              <h4 className="projectname" >
                Temple Accounting Application
              </h4>
              <p className="projectInfo">
                Developed an application as a part of my internship at Swaztik Solutions using MERN stack. Devotees and Donation details can be added. Accounting related features such as journals, Contra vouchers, expenses, receipts can be added. Various ledgers can be generated from the data.
              </p>
            </Col>
            <Col md="6">
              <Carousel interval={null} className="projectCarousel">
                <Carousel.Item >
                  <img alt="Project" src={swa1}></img>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={swa2}></img>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={swa3}></img>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={swa4}></img>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={swa5}></img>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </Container >
  );
};

export default Projects;
