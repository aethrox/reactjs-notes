import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Users from './components/Users';
import AddUser from './components/addUser';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar title="Props App"/>
        <hr />
        <AddUser />
        <Users />
      </div>
    );
  }
}

export default App;
