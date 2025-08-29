import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Make sure to update CSS accordingly
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Social icons

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo / Name */}
        <h1 className="logo"> Manson Saju</h1>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/about" className="nav-btn">About</Link>
          <Link to="/projects" className="nav-btn">Projects</Link>
          <Link to="/contact" className="nav-btn">Contact</Link>
          <a href="/manson_saju.pdf" target="_blank" rel="noopener noreferrer" className="nav-btn">Resume</a>
        </div>

        {/* Social Icons */}
        <div className="nav-social">
          <a href="https://github.com/mansonsaju?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/manson-saju-576b002a4/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Header;
