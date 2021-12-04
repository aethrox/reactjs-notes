import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    render() {
        const {users} = this.props;
        return (
            <div className="container">
                {
                    users.map(user => {
                        return (
                            <User
                                key={user.id}
                                name={user.name}
                                department={user.department}
                                salary={user.salary}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Users