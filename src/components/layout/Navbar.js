import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary navbar text-white">
      <div className="container">
        <h4 className="my-auto">
          <i className="fab fa-github"></i> Github Finder App
        </h4>
        <ul className="my-auto">
          <Link to="/" className="link text-white mr-4">
            Home
          </Link>

          <Link to="/about" className="link text-white">
            About
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
