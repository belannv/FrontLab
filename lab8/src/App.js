// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';
import ContributionList from './components/ContributionList';
import logoImagePath from './components/game.png'
import './App.css';

function App() {
 
  const [data, setData] = useState([]);
  const handleDataFetched = (apiData) => {
    setData(apiData);
  };
  
  return (
    <div className="app">
      <Header title="&nbsp;&nbsp;&nbsp;Header" imagePath ={logoImagePath} />
      <div className="main-content">
        <SideBar title="SideBar" />
       
		 <ContributionList />
       
      </div>
      <Footer title="Footer" />
    </div>
  );
}

export default App;