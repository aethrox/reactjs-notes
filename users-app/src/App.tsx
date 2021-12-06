import React, { Component } from 'react';
import UserAdd from './component/UserAdd';
import Users from './component/Users';

export default class App extends Component {
  render() {
    return (
      <div className="container ">
        <UserAdd />
        <hr />
        <Users />
      </div>
    )
  }
}
