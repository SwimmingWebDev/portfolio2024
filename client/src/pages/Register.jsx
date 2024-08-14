import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/register`,
        userData
      );
      // const response = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/users/register`,
      //   userData
      // );
      const newUser = response.data;
      console.log(newUser);
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
        <h1>Register</h1>
        <small>Admin Only</small>
      </div>
      <form className="register-form" onSubmit={registerUser}>
        {error && <small className="error-message">{error}</small>}
        <div className="input-box">
          <label>Username</label>
          <input
            type="text"
            className="field"
            placeholder="Username"
            name="name"
            value={userData.name}
            onChange={onChange}
          />
        </div>
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
        <div className="input-box">
          <label>Confirm Password</label>
          <input
            type="password"
            className="field"
            placeholder="Confirm password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={onChange}
          />
        </div>

        <div className="button-container">
          <button type="submit" className="btn-primary">
            Register
          </button>
        </div>
      </form>
      <p className="link-to-login">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};

export default Register;
