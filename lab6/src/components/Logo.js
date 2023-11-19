// components/Logo.js
import React from 'react';
import logo from './game.png'

const Logo = ({ imagePath }) => {
  return (
    <div className="logo">
      
     <a href="/"><img src={logo} alt="Game Logo" /></a>
     
    </div>
  );
}

export default Logo;