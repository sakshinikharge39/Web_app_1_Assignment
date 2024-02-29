import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Register() {
  return (
    <div>
      <Navbar />
      <div className="register template d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="form_container p-5 rounded bg-white">
          <form>
            <h3>Registeration Form</h3>
            <div className="mb-2">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="form-control"
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p className="text-center mt-2">
              <Link to="/Login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
