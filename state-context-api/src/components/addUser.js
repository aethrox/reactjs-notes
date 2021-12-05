import React from "react";

export default class AddUser extends React.Component {
  render(){
    return (
      <div className="col-md-8 mb-4">
        <div className="card border-success mb-3">
          <div className="card-header">
            <h4>Add User</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label htmlFor="name"  className="form-label">Name:</label>
                <input 
                type="text" 
                name="name" 
                id="id" 
                placeholder="Enter Name"
                class="form-control"/>
              </div>
              <div className="form-group mb-2">
              <label htmlFor="department" className="form-label">Department:</label>
                <input 
                type="text" 
                name="department" 
                id="id" 
                placeholder="Enter Department"
                class="form-control"/>
              </div>
              <div className="form-group mb-2">
              <label htmlFor="salary" className="form-label">Salary:</label>
                <input 
                type="text" 
                name="salary" 
                id="id" 
                placeholder="Enter Salary"
                class="form-control"/>
              </div>
            </form>
            <div className="d-grid gap-2">
              <button type="submit" class="btn btn-success">Add User</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}