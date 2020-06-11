import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class MainNavigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/names">
            Names
          </Link>
          <Link className="nav-link" to="/todos">
            Todos
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default MainNavigation;
