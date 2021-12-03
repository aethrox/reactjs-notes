import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    render() {
        const { name, department, salary} = this.props;
        return (
            <div>
                <ul>
                    <li>İsim: {name}</li>
                    <li>Departman: {department}</li>
                    <li>Maaş: {salary}</li>
                </ul>
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}

User.defaultProps = {
    name: "Boş",
    department: "Boş",
    salary: "Boş"
}

export default User;