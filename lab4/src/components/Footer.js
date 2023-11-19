// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = (props) => {
  const menuList = [
    { text: 'Privacy Policy', url: '/privacy' },
    { text: 'Terms of Service', url: '/terms' },
  ];
  
  return (
    <div className="footer">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Footer;
