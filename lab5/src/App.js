// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  
  return (
    <div className="app">
      <Header title="&nbsp;&nbsp;&nbsp;Header"/>
      <div className="main-content">
        <SideBar title="SideBar" />
        <Content title="Content" />
      </div>
      <Footer title="Footer" />
    </div>
  );
}

export default App;