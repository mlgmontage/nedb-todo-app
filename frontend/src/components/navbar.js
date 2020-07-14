import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <NavLink class="navbar-brand" to="/">
          TODO
        </NavLink> */}

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/notes"
              >
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
