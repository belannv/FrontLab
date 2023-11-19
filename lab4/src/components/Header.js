// components/Header.js
import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    
	<div className="header">
      <div className="left-header">
        <h1>{props.title}</h1>
      </div>
    </div>    
  );
}

export default Header;
