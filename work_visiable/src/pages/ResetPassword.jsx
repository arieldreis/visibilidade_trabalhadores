import React from 'react';
import '../styles/Auth.css';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResetPassword = ({}) => {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="auth-icon-badge">
          <Mail size={24} strokeWidth={2} />
        </div>
        <h1>Reset password</h1>
        <p>We'll send you a link to reset it</p>
      </div>

      <div className="auth-card">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Email address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={18} strokeWidth={2} />
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <button type="submit" className="primary-btn">
            Send reset link
          </button>
        </form>
      </div>

      <p className="auth-footer-text">
        <Link to={`/Login`} className="back-link">← Back to log in</Link>
      </p>
    </div>
  );
};

export default ResetPassword;