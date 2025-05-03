import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaList, FaUpload, FaExchangeAlt, FaSearch, FaChartBar } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>SBOM Finder</h3>
      </div>
      <Nav className="flex-column">
        <Nav.Link 
          as={Link} 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          <FaHome className="me-2" /> Dashboard
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/sboms" 
          className={location.pathname === '/sboms' ? 'active' : ''}
        >
          <FaList className="me-2" /> SBOM List
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/upload" 
          className={location.pathname === '/upload' ? 'active' : ''}
        >
          <FaUpload className="me-2" /> Upload
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/compare" 
          className={location.pathname === '/compare' ? 'active' : ''}
        >
          <FaExchangeAlt className="me-2" /> Compare
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/search" 
          className={location.pathname === '/search' ? 'active' : ''}
        >
          <FaSearch className="me-2" /> Search
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/statistics" 
          className={location.pathname === '/statistics' ? 'active' : ''}
        >
          <FaChartBar className="me-2" /> Statistics
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;