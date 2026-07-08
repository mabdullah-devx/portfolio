import React from 'react';
import './FloatingBadges.css';

export const FloatingBadges: React.FC = () => {
  return (
    <div className="floating-badges-container">
      <a 
        href="https://framer.link/KhRj2A5?duplicateType=siteTemplate" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-badge-btn"
      >
        Use for Free
      </a>
      <a 
        href="https://templyo.io/templates" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-badge-btn"
      >
        More Templates
      </a>
      <div className="floating-framer-badge">
        <svg 
          width="10" 
          height="15" 
          viewBox="0 0 12 18" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="framer-icon"
        >
          <path d="M0 0h12v6H6l-6 6V0z M6 12h6v6L0 12h6z" fill="currentColor"/>
        </svg>
        <span>Made in Framer</span>
      </div>
    </div>
  );
};

export default FloatingBadges;
