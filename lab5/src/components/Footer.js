// components/Footer.js
import React from 'react';
import Menu from './Menu';
import idGenerator from './helpers';
import './Footer.css';

const Footer = () => {
  const menuList = [
    { text: 'Privacy Policy', url: '/privacy' },
    { text: 'Terms of Service', url: '/terms' },
  ];

  return (
    <div className="footer">
      <h1>Footer</h1>
      <Menu list={menuList.map((item) => ({ ...item, key: idGenerator.getId('footer-menu-item') }))} />
    </div>
  );
}

export default Footer;
