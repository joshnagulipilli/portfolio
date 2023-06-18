import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import img from "./j.jpg"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Favicon url={img} />
    <App />
  </React.StrictMode>
);