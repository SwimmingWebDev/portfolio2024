import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { userContext } from "../context/userProvider.jsx";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(userContext);

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/login`,
        userData
      );

      const user = response.data;
      setCurrentUser(user);
      navigate("/");
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 2xx
        setError(
          err.response?.data?.message ||
            "Unable to register at the moment. Please try again later"
        );
      } else {
        // Something else caused the error
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <section className="register-container">
      <div className="register-container-header">
        <h1>Sign In</h1>
        <small>Admin Only</small>
      </div>
      <form className="register-form" onSubmit={loginUser}>
        {error && <small className="error-message">{error}</small>}

        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            className="field"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={onChange}
          />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input
            type="password"
            className="field"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={onChange}
          />
        </div>

        <div className="button-container">
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </div>
      </form>
      {/* <p className="link-to-login">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p> */}
    </section>
  );
};

export default Login;
