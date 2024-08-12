import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
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
        <h1>Sign In</h1>
        <small>Admin Only</small>
      </div>
      <form className="register-form">
        <small className="error-message">This is an error messsage</small>

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
      <p className="link-to-login">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

export default Login;
