import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1>MENUNLINE</h1>
      </div>
      <div className="header-options">
        <a href="">LogIn</a>
        <a href="">LogUp</a>
      </div>
    </div>
  );
};

export default Header;
