import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <Nav className="justify-content-end bg-dark text-white">
      <Nav.Item>
        <Link to="/" className="nav-link text-white">
          Home{' '}
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/campuses" className="nav-link text-white">
          Campuses
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/students" className="nav-link text-white">
          {' '}
          Students{' '}
        </Link>
      </Nav.Item>
    </Nav>
  );
};
