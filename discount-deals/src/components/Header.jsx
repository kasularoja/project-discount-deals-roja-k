import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Discount Deals</h1>
      <nav className="nav">
      <Link to="/project-discount-deals-roja-k/">Home</Link>
<Link to="/project-discount-deals-roja-k/favorites">Favorites</Link>
<Link to="/project-discount-deals-roja-k/admin">Admin Panel</Link>
      </nav>
    </header>
  );
}

export default Header;
