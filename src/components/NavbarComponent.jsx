import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const NavbarComponent = () => {
  return (
    <Navbar
      style={{ backgroundColor: "black" }}
      variant="dark"
      className="d-flex justify-content-between"
    >
      <Navbar.Brand href="#home">Topyography</Navbar.Brand>

      <Nav className="d-flex justify-content-end">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};
