//login.js
import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ObjContext } from "../../context/objContext";

function Login() {
  const { getTop5Sales } = useContext(ObjContext);

  return (
    <div>
      <Navbar />
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="form_container p-5 rounded bg-white">
          <form>
            <h3>Login Form</h3>
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
              <Link to="/Register">Register</Link>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
