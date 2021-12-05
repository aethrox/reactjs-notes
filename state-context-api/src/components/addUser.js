import React from "react";
import posed from 'react-pose';
import UserConsumer from "../context";
import uniqid from 'uniqid';

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block"
    }
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none"
    }
  }
});

export default class AddUser extends React.Component {

  state = {
    visible: false,
    name: "",
    department: "",
    salary: ""
  }

  changeVisiblyt = (e) => {
    this.setState({
      visible: !this.state.visible
    })
  }

  changeInput = (e) => {
    this.setState({
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      [e.target.name]: e.target.value
    })
  }

  addUser = (dispatch, e) => {
    e.preventDefault();
    const { name, department, salary } = this.state;

    const newUser = {
      id: uniqid(),
      name,
      department,
      salary
    }
    
    dispatch({type: 'addUser', payload: newUser})
  }

  render() {
    const { visible, name, department, salary } = this.state
    return (
      <UserConsumer>
        {
          value => {
            const { dispatch } = value;
            return (
              <div className="col-md-8 mb-4">
                <div className="d-grid gap-2 mb-2">
                  <button onClick={this.changeVisiblyt} className="btn btn-dark btn-block">{visible ? "Hide Form" : "Show Form"}</button>
                </div>
                <Animation pose={visible ? "visible" : "hidden"}>
                  <div className="card border-success mb-3">
                    <div className="card-header">
                      <h4>Add User</h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={this.addUser.bind(this, dispatch)}>
                        <div className="form-group mb-2">
                          <label htmlFor="name" className="form-label">Name:</label>
                          <input
                            type="text"
                            name="name"
                            id="id"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={this.changeInput}
                          />
                        </div>
                        <div className="form-group mb-2">
                          <label htmlFor="department" className="form-label">Department:</label>
                          <input
                            type="text"
                            name="department"
                            id="id"
                            placeholder="Enter Department"
                            className="form-control"
                            value={department}
                            onChange={this.changeInput}
                          />
                        </div>
                        <div className="form-group mb-2">
                          <label htmlFor="salary" className="form-label">Salary:</label>
                          <input
                            type="text"
                            name="salary"
                            id="id"
                            placeholder="Enter Salary"
                            className="form-control"
                            value={salary}
                            onChange={this.changeInput}
                          />
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            type="submit"
                            className="btn btn-success">Add User</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Animation>
              </div>
            )
          }
        }
      </UserConsumer>
    )
  }
}