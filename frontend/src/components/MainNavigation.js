import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainNavigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/names">Names</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainNavigation;
