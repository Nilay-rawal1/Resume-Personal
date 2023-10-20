import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nilay Rawal </span>
            from <span className="purple"> Neemuch,India.</span>
            <br /> I am a Third year student pursuing an Bachelor of Technology from 
            Vellore Institute of Technology, Bhopal.
            <br />
            Additionally, I am currently Google Crowdsource Influncer and Team Lead at ELA VIT-Bhopal
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Listening Music 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Harmonium 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's grow strong together"{" "}
          </p>
          <footer className="blockquote-footer">Nilay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
