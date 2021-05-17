import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import eng1 from "../assets/projects/eng1.gif";
import eng2 from "../assets/projects/eng2.gif";
import eng3 from "../assets/projects/eng3.gif";
import eng4 from "../assets/projects/eng4.gif";
import eng5 from "../assets/projects/eng5.gif";
import ers1 from "../assets/projects/ers1.gif";
import ers2 from "../assets/projects/ers2.gif";
import ers3 from "../assets/projects/ers3.gif";
import ers4 from "../assets/projects/ers4.gif";
import ers5 from "../assets/projects/ers5.gif";
import gn1 from "../assets/projects/gn1.gif";
import gn2 from "../assets/projects/gn2.gif";
import gn3 from "../assets/projects/gn3.gif";
import swa1 from "../assets/projects/swa1.gif";
import swa2 from "../assets/projects/swa2.gif";
import swa3 from "../assets/projects/swa3.gif";
import swa4 from "../assets/projects/swa4.gif";
import swa5 from "../assets/projects/swa5.gif";
import "../styles/projects.css";
const Projects = () => {

  return (
    <Container>
      <div className="ProjectSection">
        <h1 className="projectheading">Projects</h1>
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
          <Row className="projectrow">
            <Col md="6">
              <h4 className="projectname" >
                Game Nation
              </h4>
              <p className="projectInfo">
                Developed an application using React.JS and Firebase. Users can play tetris, a super fun tile matching puzzle game. Players can also add friends, and view their scores in the leaderboard. Profile avatars can be chosen, and players also have the choice of playing as a guest without creating an account.
              </p>
            </Col>
            <Col md="6">
              <Carousel interval={null} className="projectCarousel">
                <Carousel.Item >
                  <img alt="Project" src={gn1}></img>
                  <figcaption>Profile Page</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={gn2}></img>
                  <figcaption>Add Friends</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={gn3}></img>
                  <figcaption>Tetris Game</figcaption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row className="projectrow">
            <Col md="6">
              <h4 className="projectname" >
                Employee Recruitment System
              </h4>
              <p className="projectInfo">
                Developed an application to facilitate the job hiring process for
                companies and applicant using React for the frontend, and backend
using Typescript, Express.js and MongoDB.Applicants can apply through the portal and the HR schedules interviews. The interviewer can view all the upcoming interviews and submit their feedback.              </p>
            </Col>
            <Col md="6">
              <Carousel interval={null} className="projectCarousel">
                <Carousel.Item >
                  <img alt="Project" src={ers1}></img>
                  <figcaption>Dashboard</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={ers2}></img>
                  <figcaption>Search Job</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={ers3}></img>
                  <figcaption>View Applications</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={ers4}></img>
                  <figcaption>Interviewer Calendar</figcaption>
                </Carousel.Item>
                <Carousel.Item >
                  <img alt="Project" src={ers5}></img>
                  <figcaption>Interview Feedback</figcaption>
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
