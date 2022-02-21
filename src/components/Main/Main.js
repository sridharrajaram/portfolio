import React, { useRef, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from "reactstrap";
import { DETAILS } from "../../data/Details.js";
import About from "../About/About.js";
import Skills from "../Skills/Skills.js";
import Certificate from "../Certificate/Certificate.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contact/Contact.js";
import Follow from "../Follow/Follow.js";
import Footer from "../Footer/Footer.js";
import Home from "../Home/Home.js";
import "./Main.css";

function Main() {
  const myProfileDetails = DETAILS;
  const [toggleMenu, setToggleMenu] = useState(false);

  const homeRef = useRef(null);
  const scrollToHome = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    homeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const certificateRef = useRef(null);
  const scrollToCertificate = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    certificateRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const skillsRef = useRef(null);
  const scrollToSkills = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    skillsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const projectsRef = useRef(null);
  const scrollToProjects = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const contactRef = useRef(null);
  const scrollToContact = () => {
    setToggleMenu(false);
    // `current` points to the mounted text input element
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div>
      <div>
        <Navbar
          dark
          color="dark"
          expand="md"
          className="navbar"
          style={{ padding: ".5rem 1rem" }}
        >
          <NavbarBrand href="/">
            <img
              src={myProfileDetails.logo}
              alt={myProfileDetails.name}
              style={{ width: "30px", height: "30px", color: "white" }}
            />
          </NavbarBrand>
          <NavbarToggler
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          />
          <Collapse isOpen={toggleMenu} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={scrollToHome}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={scrollToAbout}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={scrollToCertificate}
                >
                  Certification
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={scrollToSkills}
                >
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={scrollToProjects}
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={scrollToContact}
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* Other Child Components */}
        <br />
        <br />
        <div ref={homeRef}>
          <Home details={myProfileDetails} />
        </div>
        <div ref={aboutRef}>
          <About details={myProfileDetails} />
        </div>
        <div ref={certificateRef}>
          <Certificate details={myProfileDetails} />
        </div>
        <div ref={skillsRef}>
          <Skills details={myProfileDetails} />
        </div>
        <div ref={projectsRef}>
          <Projects details={myProfileDetails} />
        </div>
        <div ref={contactRef}>
          <Contact details={myProfileDetails} />
        </div>
        <Follow details={myProfileDetails} />
        <Footer details={myProfileDetails} sTC={scrollToContact} />
      </div>
    </div>
  );
}

export default Main;
