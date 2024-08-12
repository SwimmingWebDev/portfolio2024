import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPW: "",
  });

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="register-container">
      <div className="register-container-header">
        <h1>Register</h1>
        <small>Admin Only</small>
      </div>
      <form className="register-form">
        <small className="error-message">This is an error messsage</small>
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
            name="confirmPW"
            value={userData.confirmPW}
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
