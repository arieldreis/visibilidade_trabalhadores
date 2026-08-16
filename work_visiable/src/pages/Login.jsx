import React from 'react';
import '../styles/Auth.css';
import { Link } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="auth-icon-badge">
          <LogIn size={24} strokeWidth={2} />
        </div>
        <h1>Welcome back</h1>
        <p>Log in to your account</p>
      </div>

      <div className="auth-card">
        <button type="button" className="google-btn">
          <FcGoogle size={18} />
          Continue with Google
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper active">
              <Mail className="input-icon" size={18} strokeWidth={2} />
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="form-group">
            <div className="label-row">
              <label>Password</label>
              <Link to={`/forgot-password`} className="forgot-link">Forgot password?</Link>
            </div>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} strokeWidth={2} />
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit" className="primary-btn">
            Log in
          </button>
        </form>
      </div>
      <p className="auth-footer-text">
        Don't have an account? <Link to={`/Register`}>Create one</Link>
      </p>
    </div>
  );
};

export default Login;