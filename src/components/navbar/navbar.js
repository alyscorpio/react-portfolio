import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <form className="d-flex1">
          <a class="nav-link" href="/About">ABOUT</a>
        </form>
        <form className="d-flex1">
          <a class="nav-link" href="/Work">WORK</a>
        </form>
        <form className="d-flex2">
          <a class="nav-link" href="/Contact">CONTACT</a>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;