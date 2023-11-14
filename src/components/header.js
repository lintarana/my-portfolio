

import React from 'react';
import '../styles/HeaderStyles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Linta Rana</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
