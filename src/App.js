import React from 'react';
import './App.css';

import logo from './assets/sesilogo.png';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" style={{ height: 120 }}/>

      <div className="content">
        <Routes />
      </div>
    
    </div>
  );
}

export default App;
