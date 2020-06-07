import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <button className="btn btn-dark">
          <Link to="/">
            <h6>Safe My Reservation</h6>
          </Link>
        </button>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <button className="btn btn-dark">
              <Link to="/aboutus">
                <h6>About Us</h6>
              </Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
