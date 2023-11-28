// components/Content.js
import React from 'react';
import './Content.css';

const Content = (props) => {
  return (
    <div className="content">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Content;
