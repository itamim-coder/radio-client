import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../Authentication/hooks/useFirebase";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = useFirebase();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Radio Station</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* after login user can post update watch his radio station*/}
            {user.email ? (
              <>
                <Link className="m-2 nav-btn" to="/addstation">
                  Add Station
                </Link>
                <Link className="m-2 nav-btn" to="/allstation">
                  All Station
                </Link>
              </>
            ) : (
              <></>
            )}
          </Nav>
          <Nav>
            <p className="text-white"> Signin using {user.email}</p>
            {user.email ? (
              <button onClick={logOut}>Logout</button>
            ) : (
              <Link className="nav-btn" to="/signup">
                Signup
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
