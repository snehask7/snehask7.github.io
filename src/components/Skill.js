import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import apache from "../assets/skill/apache.png";
import c from "../assets/skill/c.png";
import css from "../assets/skill/css.png";
import db from "../assets/skill/db.png";
import express from "../assets/skill/express.png";
import fb from "../assets/skill/fb.png";
import git from "../assets/skill/git.png";
import heroku from "../assets/skill/heroku.png";
import html from "../assets/skill/html.png";
import java from "../assets/skill/java.png";
import js from "../assets/skill/js.png";
import mongo from "../assets/skill/mongo.png";
import mysql from "../assets/skill/mysql.png";
import node from "../assets/skill/node.png";
import pm from "../assets/skill/pm.png";
import psql from "../assets/skill/psql.png";
import py from "../assets/skill/python.png";
import react from "../assets/skill/react.png";
import scikit from "../assets/skill/scikit.png";
import tf from "../assets/skill/tf.png";
import "../styles/skills.css";
const Skill = () => {

  return (
    <div className="SkillSection">
      <Container >
        <h1 className="skillheading" >
          Skills</h1>
        <Row style={{ justifyContent: "center" }}>
          <Col md="4" >
            <Card className="skillCard smallcard" >
              <Card.Body>
                <Row>
                  <Col>
                    <img className="skillimg" alt="html" src={html}></img>
                  </Col>
                  <Col><img className="skillimg" alt="css" src={css}></img></Col>
                  <Col><img className="skillimg" alt="js" src={js}></img></Col>
                  <Col><img className="skillimg" alt="python" src={py}></img></Col>
                  <Col><img className="skillimg" alt="C" src={c}></img></Col>
                  <Col><img className="skillimg" alt="java" src={java}></img></Col>
                  <Col><p className="skillcaption">Languages</p></Col>
                </Row>
              </Card.Body>
            </Card><br></br>
            <Card className="skillCard smallcard" >
              <Card.Body>
                <Row>
                  <Col><img className="skillimg" alt="react" src={react}></img></Col>
                  <Col><img className="skillimg" alt="node" src={node}></img></Col>
                  <Col><img className="skillimg" alt="express" src={express}></img></Col>
                  <Col><img className="skillimg" alt="apache" src={apache}></img></Col>
                  <Col><img className="skillimg" alt="tensorflow" src={tf}></img></Col>
                  <Col><img className="skillimg" alt="scikit" src={scikit}></img></Col>
                  <Col><p className="skillcaption">Frameworks & Technologies</p></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" >
            <Card className="skillCard bigcard">
              <Card.Body>
                <Row>
                  <Col><img className="skillimg" alt="mongodb" src={mongo}></img></Col>
                  <Col><img className="skillimg" alt="postgresql" src={psql}></img></Col>
                  <Col><img className="skillimg" alt="mysql" src={mysql}></img></Col>
                  <Col><img className="skillimg" alt="firebase" src={fb}></img></Col>
                  <Col><img className="skillimg" alt="postman" src={pm}></img></Col>
                  <Col><img className="skillimg" alt="heroku" src={heroku}></img></Col>
                  <Col><img className="skillimg" alt="github" src={git}></img></Col>
                  <Col><img className="skillimg" alt="dbeaver" src={db}></img></Col>
                  <Col><p className="skillcaption">Databases & Tools</p></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* react,node,express,apache,tensorflow,scikitlearm */}

        {/* mongo,postgres,firebase,mysql,postman,herolu,git,dbeaver, */}

      </Container>

    </div>
  );
};

export default Skill;
