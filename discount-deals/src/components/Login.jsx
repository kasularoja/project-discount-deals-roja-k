import React from 'react';
import './Login.css';

function Login({ onLogin }) {
  return (
    <div className="login-container">
      <h2>Select Role to Login</h2>
      <div className="role-selector">
        <button onClick={() => onLogin('admin')}>Admin</button>
        <button onClick={() => onLogin('user')}>User</button>
        <button onClick={() => onLogin('guest')}>Guest</button>
      </div>
    </div>
  );
}

export default Login;
