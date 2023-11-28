// components/SideBar.js
import React from 'react';
import Menu from './Menu';
import idGenerator from './helpers';
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
	   <Menu list={menuList.map((item) => ({ ...item, key: idGenerator.getId('menu-item') }))} />
    </div>
  );
}

export default SideBar;
