import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Users from './components/Users';

class App extends Component {

  state = {
    users: [
      {name: "Kaan", department: "Bilişim", salary: "7.000$"},
      {name: "Onur", department: "Bilişim", salary: "7.000$"},
      {name: "Ege", department: "Bilişim", salary: "7.000$"},
      {name: "Esat", department: "Bilişim", salary: "7.000$"},
      {name: "Onat", department: "Bilişim", salary: "7.000$"}
    ]
  }

  render() {
    return (
      <div className="container">
        <Navbar title="Props App"/>
        <hr />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
