import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  const location = useLocation();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left Column: Heading */}
          <div className="footer-left-col">
            <p className="footer-title">Scaling Start-ups for Growth.</p>
          </div>

          {/* Center Column: Quick Links */}
          <div className="footer-links-col">
            <span className="footer-col-label">/Quick links</span>
            <div className="footer-pill-links">
              <Link to="/" className="footer-pill-link">Home</Link>
              <a href="/#bio" onClick={(e) => scrollToSection(e, 'bio')} className="footer-pill-link">About Me</a>
              <a href="/#services" onClick={(e) => scrollToSection(e, 'services')} className="footer-pill-link">Services</a>
              <Link to="/work" className="footer-pill-link">Works</Link>
              <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className="footer-pill-link">Contact</a>
            </div>
          </div>

          {/* Right Column: Contact */}
          <div className="footer-contact-col">
            <span className="footer-col-label">/Contact</span>
            <a href="mailto:hello@mabdullah.dev" className="footer-email-link">
              hello@mabdullahdevx.online
            </a>
          </div>
        </div>

        {/* Outline background text */}
        <div className="footer-bg-text" aria-hidden="true">ABDULAH</div>
      </div>
    </footer>
  );
};

export default Footer;
