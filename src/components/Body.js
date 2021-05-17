import AOS from "aos";
import React from "react";
import "../styles/aos.css";
import "../styles/home.css";
import "../styles/particle.scss";
import About from "./About";
import Nav from './Navbar';
import Projects from './Projects';
import Skill from './Skill';
const Body = () => {
  AOS.init();
  return (
    <>
      <Nav></Nav>
      <div id="home" className="home" >
        <div class="animation-wrapper">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
          <div class="particle particle-4"></div>
        </div>
        <div className="hidiv">
          <span className="hiText">Hi, my name is <span className="name">Sneha </span><span class="wave">👋</span></span><br></br>
          <span className="hiText">I'm a <span className="name">Fullstack Developer</span></span><br></br>
        </div>
      </div>
      <div id="about" data-aos="fade-right" data-aos-duration="1000">
        <div class="About" >
          <About ></About>
        </div>
      </div>

      <div id="skill" data-aos="fade-right" data-aos-duration="800">
        <div class="Skill" >
          <Skill></Skill>
        </div>
      </div>
      <div id="projects" data-aos="fade-right" data-aos-duration="800">
        <div class="Project" >
          <Projects></Projects>
        </div>
      </div>

      {/* <div data-aos="fade-up" id="about">
        <div class="About" >
          <About ></About>
        </div>
      </div> */}
      {/* <div data-aos="fade-up" id="about">
        <div class="About" >
          <About ></About>
        </div>
      </div>
      <div data-aos="fade-right" id="skill" >
        <div class="Skill" >
          <Skill></Skill>
        </div>
      </div>
      <div data-aos="fade-right" id="projects">
        <div class="Projects" >
          <Projects2></Projects2>
        </div>
      </div> */}
    </>
  );
};

export default Body;