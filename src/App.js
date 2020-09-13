import React from 'react';
import './App.css';
import Nav from './nav/Nav'
import HomeContainer from './containers/home/HomeContainer'

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-header">
          <h1 className="home-title">Những tác động của dịch bệnh covid-19</h1>
        </div>
        <Nav />
        <HomeContainer/>
      </div>
    </div>
  );
}

export default App;
