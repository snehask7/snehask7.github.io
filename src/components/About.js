import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImage from "../assets/About.png";
import "../styles/about.css";
const About = () => {

  return (
    <Container className="AboutSection">
      <div >

        <Container>
          <h1 className="aboutheading"> About</h1>
          <Row >
            <Col style={{ textAlign: "center" }}> <img alt="avatar" className="ProfilePic" width="500" src={AboutImage}></img></Col>
            <Col ><div className="aboutInfo"><p >
              My name is Sneha and I'm currently a final year Computer Science student at SSN College of Engineering, Chennai. I am passionate towards designing and developing software applications.
              </p></div></Col>
          </Row>
        </Container>

      </div>{" "}
    </Container>
  );
};

export default About;
