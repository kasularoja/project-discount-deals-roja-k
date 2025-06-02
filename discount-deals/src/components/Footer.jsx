import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Discount Deals App</p>
      <Link to="/">Back to Login</Link>
    </footer>
  );
}

export default Footer;
