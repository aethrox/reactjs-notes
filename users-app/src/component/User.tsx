import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{"Test"}</h4>
            <i
              // onClick={}
              className="far fa-trash-alt"
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
          {
            <div className="card-body">
              <p className="card-text">Departman: {}</p>
              <p className="card-text">Maaş: {}</p>
            </div>
          }
        </div>
      </div>
    )
  }
}
