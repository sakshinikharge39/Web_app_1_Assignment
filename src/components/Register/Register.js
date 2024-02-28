import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../Navbar/Navbar";

function Register() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the login page after registration
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <div className="register template d-flex justify-content-center align-items-center vh-100 ">
        <div className="form_container p-5 rounded bg-white">
          <form onSubmit={handleSubmit}>
            <h3>Registration Form</h3>
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;


