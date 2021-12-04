import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Users from './components/Users';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar title="Props App"/>
        <hr />
        <Users />
      </div>
    );
  }
}

export default App;