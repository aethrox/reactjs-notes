import React, { Component } from 'react';
import Navbar from './components/Navbar';
import User from './components/User'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="Props App"/>
        <hr />
        <User
          name="Kaan"
          department="Bilişim"
          salary="6.000 $"
        />
        <User
          name="Ahmet"
          department="Cyber Security Analyst"
          salary="10.000 $"
        />
        <User
          name="Cüneyt"
          department="Designer"
          salary="8.000 $"
        />
      </div>
    );
  }
}

export default App;
