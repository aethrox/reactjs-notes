import React, { Component } from 'react'

export default class UserAdd extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-control">
            <label htmlFor="firstname">Firstname: </label>
            <input type="text" name="firstname" id="firstname" />
          </div>
          <div className="form-control">
            <label htmlFor="lastname">Lastname: </label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div className="form-control">
            <label htmlFor="phoneNumber">Phone: </label>
            <input type="text" name="phoneNumber" id="phoneNumber" />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age: </label>
            <input type="number" name="age" id="age" />
          </div>
          <button className="btn btn-border">Add User</button>
        </form>
      </div>
    )
  }
}
