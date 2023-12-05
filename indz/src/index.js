import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import  store  from './components/store';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <Provider store={store}>
      <App />
    </Provider>
 
);


