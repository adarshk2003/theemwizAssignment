import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const StyledNavbar = styled(Navbar)`
  background-color:#2a2640;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease-in-out;
`;

const StyledNavLink = styled(Nav.Link)`
  color: white !important;
  margin: 0 1.5rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
   font-family: "Lato", sans-serif;

  &:hover {
    color: #007bff !important;
  }

  &::after {
    content: '';
    height: 2px;
    background: #007bff;
    width: 0;
    position: absolute;
    left: 50%;
    bottom: -5px;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid white;
   font-family: "Lato", sans-serif;

  &:hover {
    background-color: #0056b3;
     border-radius: 30px;
  }
`;

const CenterNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 991px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 36px;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CustomToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 991px) {
    display: block;
  }
`;

const NavbarComponent = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      <StyledNavbar expand="lg">
        <Container fluid>
          {/* Left - Logo Image */}
          <Navbar.Brand href="#">
            <Logo src="/logo.png" alt="Logo" />
          </Navbar.Brand>

          {/* Center - Nav Links (Desktop only) */}
          <CenterNav>
            <Nav className="mx-auto">
              <StyledNavLink href="#about">About</StyledNavLink>
              <StyledNavLink href="#services">Services</StyledNavLink>
              <StyledNavLink href="#pricing">Pricing</StyledNavLink>
              <StyledNavLink href="#blog">Blog</StyledNavLink>
            </Nav>
          </CenterNav>

          {/* Right - Button & Mobile Toggle */}
          <div className="d-flex align-items-center">
            <StyledButton className="d-none d-lg-inline-block me-3">Contact</StyledButton>
            <CustomToggle onClick={handleShow}>
              <FaBars />
            </CustomToggle>
          </div>
        </Container>
      </StyledNavbar>

      {/* Offcanvas for Mobile Menu */}
      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark">
          <Nav className="flex-column">
            <StyledNavLink href="#about" onClick={handleClose}>About</StyledNavLink>
            <StyledNavLink href="#services" onClick={handleClose}>Services</StyledNavLink>
            <StyledNavLink href="#pricing" onClick={handleClose}>Pricing</StyledNavLink>
            <StyledNavLink href="#blog" onClick={handleClose}>Blog</StyledNavLink>
            <div className="mt-3">
              <StyledButton onClick={handleClose}>Contact</StyledButton>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarComponent;
