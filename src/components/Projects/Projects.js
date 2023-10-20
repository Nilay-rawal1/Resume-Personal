import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BarCost from"../../Assets/Projects/barcost.png"
import Processing from "../../Assets/Projects/processing.jpeg"
import NewsNirnay from "../../Assets/Projects/newsnirnary.png"
import crowdsource from"../../Assets/Projects/crowdsource.png"
import ELA from "../../Assets/Projects/ela.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BarCost}
              isBlog={false}
              title="BarCost"
              description="A Price Tracking Website, Where you can track the price of your fav products and buy at right time when product cost is all time low. once you login you can add your product link"
              ghLink="https://github.com/Nilay-rawal1/Price-Tracker"
              demoLink="https://barcost.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Processing}
              isBlog={false}
              title="Image Processing"
              description="Project Baesed on Computer Vision and Image Processing . From changing the image Grayscale to Tracking Object & Object detection can be done using these Modules.
              It is complete Blend of Computer Vision and AI Models"
              ghLink="https://github.com/Nilay-rawal1/Image-Processing"
                         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdsource}
              isBlog={false}
              title="Crowdsource VIT Bhopal"
              description="Crowdsource by Google ,VIT Bhopal Community,As Google Crowdsource Influncer, I have developed Website where people Can connect with community and get informed about new events "
              ghLink=" https://github.com/Google-Crowdsource-VIT-bhopal/Crowdsource-VIT-Bhopal"
              demoLink="https://google-crowdsource-vit-bhopal.github.io/Crowdsource-VIT-Bhopal/"
             
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ELA}
              isBlog={false}
              title="ELA VIT-Bhopal"
              description="As Techincal Lead of ELA Club VIT Bhopal .I have developed Website for the Club . Where People can meet Team of Ela and see the Prev. glimpes of Club what they have achived in past year"
              ghLink="https://github.com/ELA-VitBhopal/ELA-website"
              demoLink="https://ela-vitbhopal.github.io/ELA-website/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsNirnay}
              isBlog={false}
              title="NewsNirnay"
              description="NewsNirnay is currently under developement Project. It is Advance Fake New Detection website, Where you can check whether news is correct for not also you can report the same"
              ghLink="https://github.com/Nilay-rawal1/News-Nirnay"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
