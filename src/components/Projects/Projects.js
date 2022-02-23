import React from "react";
import "../Projects/Projects.css";
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function Projects(props) {
  const myProfileDetails = props.details;

  const openProjectsURL = () => {
    window.open(myProfileDetails.profile_links.github.link, "_blank");
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-12 col-md-6 lgndetails">
            <Card
              body
              inverse
              style={{
                backgroundColor: "rgb(46, 47, 52)",
                borderColor: "rgb(46, 47, 52)",
              }}
            >
              <CardTitle tag="h5">Login details</CardTitle>
              <CardText>
                Username/Email Address: appadmnchk@gmail.com
                <br />
                Password: @dmin98765!
              </CardText>
            </Card>
          </div>
          <div className="col-12 col-md-6 lgndetails">
            <Card
              body
              inverse
              style={{
                backgroundColor: "rgb(46, 47, 52)",
                borderColor: "rgb(46, 47, 52)",
              }}
            >
              <CardTitle tag="h5">Payment details</CardTitle>
              <CardText>
                Test Card No: 4111 1111 1111 1111
                <br />
                Test Card exp: 09/23
              </CardText>
            </Card>
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          {myProfileDetails.projects.map((project) => {
            return (
              <div
                key={project.id}
                className="col-12 col-md-4 project-tile"
                style={{ marginBottom: "20px" }}
              >
                <Card
                  className="projectcard-style"
                  variant="outlined"
                  style={{
                    display: "block",
                    backgroundColor: "rgb(46, 47, 52)",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">{project.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {project.subtitle}
                    </CardSubtitle>
                  </CardBody>
                  <img
                    alt="project"
                    src={project.image}
                    width="94%"
                    style={{ marginLeft: "3%" }}
                  />
                  <CardBody>
                    {/* <ul>
                      <li>{project.description.para1}</li>
                      <li>{project.description.para2}</li>
                    </ul> */}
                    <CardLink
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="projectbutton"
                    >
                      Live
                    </CardLink>
                    <CardLink
                      href={project.FE_ghlink}
                      target="_blank"
                      rel="noreferrer"
                      className="projectbutton"
                    >
                      Frontend
                    </CardLink>
                    <CardLink
                      href={project.BE_ghlink}
                      target="_blank"
                      rel="noreferrer"
                      className="projectbutton"
                    >
                      Backend
                    </CardLink>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="text-center">
            <button
              className="view-projects view-projects--specs"
              onClick={() => openProjectsURL()}
            >
              More Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
