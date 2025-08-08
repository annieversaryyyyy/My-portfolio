import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MyNavBar.scss";
import React from "react";

const MyNavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom-nav">
            <Nav.Link href="#about">Обо мне</Nav.Link>
            <Nav.Link href="#education">Образование</Nav.Link>
            <Nav.Link href="#skills">Мои скиллы</Nav.Link>
            <Nav.Link href="#projects">Мои pet-проекты</Nav.Link>
            <Nav.Link href="#contact">Связь со мной</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
