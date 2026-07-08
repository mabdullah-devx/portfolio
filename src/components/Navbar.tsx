import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="navbar-pill-container">
      <div className={`navbar-pill ${isOpen ? 'expanded' : ''}`}>
        <div className="navbar-pill-header">
          <Link to="/" className="navbar-logo">
            M Abdullah
          </Link>
          <button
            className={`navbar-toggle-btn ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="dots-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Dropdown Links */}
        <div className="navbar-dropdown-content">
          <div className="navbar-links-list">
            <a
              href="/#bio"
              onClick={(e) => scrollToSection(e, 'bio')}
              className="nav-item"
            >
              About Me
            </a>
            <a
              href="/#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="nav-item"
            >
              Services
            </a>
            <Link to="/work" className={`nav-item ${location.pathname.startsWith('/work') ? 'active' : ''}`}>
              Projects
            </Link>
            <a
              href="/#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="nav-item"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
