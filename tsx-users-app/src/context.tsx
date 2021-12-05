import React, { Component } from 'react'

const UserContext = React.createContext("");

export class UserProvider extends Component {

  state = {
    users: [
      {id: "1", name: "Kaan", department: "Bilişim", salary: "7.000$"},
      {id: "2", name: "Onur", department: "Bilişim", salary: "7.000$"},
      {id: "3", name: "Ege", department: "Bilişim", salary: "7.000$"},
      {id: "4", name: "Esat", department: "Bilişim", salary: "7.000$"},
      {id: "5", name: "Onat", department: "Bilişim", salary: "7.000$"}
    ],
  }

  render() {
    return (
      <UserContext.Provider value={`${this.state}`}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider
