import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={toggleMenu}>
          <img src="/logo.png" alt="Global Reach Exports Logo" className="navbar-logo-img" />
        </Link>

        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={toggleMenu}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} onClick={toggleMenu}>About Us</Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active-link' : ''} onClick={toggleMenu}>Products</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={toggleMenu}>Contact</Link>
        </nav>

        <div className="navbar-right">
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
