import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, password);

  const handleSubmit = () => {};

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__head">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <Link style={{ textDecoration: "none", color: "primary" }} to="/">
          FORGOT PASSWORD
        </Link>
        <Link
          style={{ textDecoration: "none", color: "primary" }}
          to="/register-startup"
        >
          DON'T HAVE AN ACCOUNT? SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Login;
