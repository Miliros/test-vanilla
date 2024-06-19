import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../../public/logo.png";

export const NavBar = () => {
  const [navResponsive, setNavResponsive] = useState(false);
  const [activeNav, setActiveNav] = useState("Inicio");

  const handleSetActive = (section) => {
    setActiveNav(section);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className={styles.nav}>
      <Container fluid>
        <Navbar.Brand className={styles.brand}>VANILLA</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={styles.buttonResponsive}
          onClick={() => setNavResponsive(true)}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={navResponsive ? styles.activep : ""}
        >
          <Nav className="ms-auto">
            <p
              smooth={true}
              duration={500}
              className={`${styles.p} ${
                activeNav === "Inicio" && !navResponsive ? styles.active : ""
              }`}
              onClick={() => handleSetActive("Inicio")}
            >
              Inicio
            </p>
            {activeNav === "Inicio" && navResponsive && (
              <span className={styles.activeIndicator2}></span>
            )}
            <p
              smooth={true}
              duration={500}
              className={`${styles.p} ${
                activeNav === "Seccion 2" && !navResponsive ? styles.active : ""
              }`}
              onClick={() => handleSetActive("Seccion 2")}
            >
              Seccion 2
            </p>
            {activeNav === "Seccion 2" && navResponsive && (
              <span className={styles.activeIndicator}></span>
            )}

            <p
              smooth={true}
              duration={500}
              className={`${styles.p} ${
                activeNav === "Seccion 3" && !navResponsive ? styles.active : ""
              }`}
              onClick={() => handleSetActive("Seccion 3")}
            >
              Seccion 3
            </p>
            {activeNav === "Seccion 3" && navResponsive && (
              <span className={styles.activeIndicator}></span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
