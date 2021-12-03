import React, { Component } from 'react';
import Navbar from './components/Navbar';
import User from './components/User'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="User App"/>
        <hr />
        <User />
      </div>
    );
  }
}

export default App;
