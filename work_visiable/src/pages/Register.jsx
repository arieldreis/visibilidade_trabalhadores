import React from 'react';
import '../styles/Auth.css';
import { Link } from 'react-router-dom';
import { Users, Mail, Lock } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="auth-icon-badge">
          <Users size={24} strokeWidth={2} />
        </div>
        <h1>Create your account</h1>
        <p>Sign up to get started</p>
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
            <div className="input-wrapper">
              <Mail className="input-icon" size={18} strokeWidth={2} />
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} strokeWidth={2} />
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} strokeWidth={2} />
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit" className="primary-btn">
            Create account
          </button>
        </form>
      </div>
      <p className="auth-footer-text">
        Already have an account? <Link to={`/Login`}>Log in</Link>
      </p>
    </div>
  );
};

export default Register;