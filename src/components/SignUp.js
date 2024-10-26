// components/SignUp.js
import React from 'react';
import './SignUp.css'; // Ensure you have this CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form">
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faUser} /> First Name:
          </label>
          <input type="text" name="firstName" placeholder="Enter your first name" required />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faUser} /> Last Name:
          </label>
          <input type="text" name="lastName" placeholder="Enter your last name" required />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faEnvelope} /> Email:
          </label>
          <input type="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faLock} /> Password:
          </label>
          <input type="password" name="password" placeholder="Create a password" required />
        </div>
        <div className="form-group">
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
      <div className="login-redirect">
        <span>Already have an account?</span>
        <button className="login-btn" onClick={handleLoginRedirect}>Login</button>
      </div>
    </div>
  );
};

export default SignUp;
