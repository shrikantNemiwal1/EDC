import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/signup.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <h1 className="signup__head">Sign Up</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="phone">Mobile No.</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="e.g. 000-000-0000"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="companyName">StartUp/Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <button className="submit-btn" type="submit">
                Continue
              </button>
            </div>
          </form>
        ) : (
          <div className="signup__confirmation">
            <p>Please enter the security code sent on your email</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="phone"></label>
                <input
                  type="tel"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  pattern="[0-9]{6}"
                  placeholder="e.g. 000000"
                  required
                />
              </div>
              <div className="form-row">
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
        <Link style={{ textDecoration: "none", color: "primary" }} to="/">
          FORGOT PASSWORD
        </Link>
        <Link
          style={{ textDecoration: "none", color: "primary" }}
          to="/register-startup"
        >
          ALREADY HAVE AN ACCOUNT? LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Login;
