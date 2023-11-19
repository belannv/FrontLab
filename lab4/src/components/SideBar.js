// components/SideBar.js
import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
  const menuList = [
    { text: 'Home', url: '/' },
    { text: 'About Us', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];
  
  return (
    <div className="sidebar">
      <h1>{props.title}</h1>
    </div>
  );
}

export default SideBar;
