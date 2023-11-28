// components/Header.js
import React from 'react';
import Logo from './Logo';
import DateTime from './DateTime';
import './Header.css';

const Header = (props) => {
  return (
    
	<div className="header">
      <div className="left-header">
        <Logo imagePath={props.imagePath} />
        <h1>{props.title}</h1>
      </div>
      <div className="right-header">
        <DateTime />
      </div>
    </div>    
  );
}

export default Header;
