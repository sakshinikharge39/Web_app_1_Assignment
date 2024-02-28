import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isOpen, setIsopen] = useState(false);

    const toggleNavbar = () =>{
        setIsopen(!isOpen);
    };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Sales-App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded= {isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Add Sales
            </Link>
            <Link className="nav-link" href="#">
              Top 5 Sales
            </Link>
            <Link className="nav-link" to="#">
              Today's Total Revenue
            </Link>
            <Link className="nav-link" to="/login">
              Login 
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <a className="nav-link" href="#">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
