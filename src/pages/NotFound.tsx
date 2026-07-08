import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './NotFound.css';

export const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <SEO 
        title="404 - Page Not Found | M Abdullah" 
        description="The page you are looking for does not exist."
      />
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="notfound-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
