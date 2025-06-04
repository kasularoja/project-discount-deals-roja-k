import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRoleClick = (role) => {
    if (role === 'user') {
      setSelectedRole('user');
    } else {
      // Directly login as admin or guest (no password)
      onLogin(role);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'user123') {
      onLogin('user');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      {selectedRole === 'user' ? (
        <div>
          <h2>User Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      ) : (
        <div>
          <h2>Select Role to Login</h2>
          <div className="role-selector">
            <button onClick={() => handleRoleClick('admin')}>Admin</button>
            <button onClick={() => handleRoleClick('user')}>User</button>
            <button onClick={() => handleRoleClick('guest')}>Guest</button>
          </div>
          <p className="note">* Only 'User' requires login (user / user123)</p>
        </div>
      )}
    </div>
  );
}

export default Login;
