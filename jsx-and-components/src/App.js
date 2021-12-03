import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <h1>App Component</h1>
      </div>
    );
  }
}

export default App;
