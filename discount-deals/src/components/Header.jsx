import { Header } from './Header';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role');
  localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <header className="site-header">
      <h1 className="title">Discount Deals</h1>

      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/dealList">Deals</Link>

        {(role === 'user' || role === 'admin') && (
          <Link to="/favorites">Favorites</Link>
        )}

        {role === 'admin' && <Link to="/adminform">Admin Panel</Link>}

        <Link to="/about">About</Link>

        {/* User info or login */}
        {username ? (
          <div className="user-info">
            <span>Welcome, <strong>{username}</strong></span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="login-link">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
