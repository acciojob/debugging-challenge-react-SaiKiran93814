import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h2 className="title">My React App</h2>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
