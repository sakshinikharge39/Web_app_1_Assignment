import React, { useState } from "react";
import './Navbar.css'

const Navbar = () => {

    const [isOpen, setIsopen] = useState(false);

    const toggleNavbar = () =>{
        setIsopen(!isOpen);
    };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Sales-App
        </a>
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
            <a className="nav-link active" aria-current="page" href="#">
              Add Sales
            </a>
            <a className="nav-link" href="#">
              Top 5 Sales
            </a>
            <a className="nav-link" href="#">
              Today's Total Revenue
            </a>
            <a className="nav-link" href="#">
              Login 
            </a>
            <a className="nav-link" href="#">
              Register
            </a>
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
