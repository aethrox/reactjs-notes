import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {

    state = {
        isVisible: false
    }

    static defaultProps = {
        name: "Boş",
        department: "Boş",
        salary: "Boş"
    }

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    //1. this.onClickEvent.bind(this),
    //2. constructor(props){
    //     super(props);
    //     this.onClickEvent = this.onClickEvent.bind(this)
    // }
    // arrow function

    render() {
        const { name, department, salary} = this.props;
        const { isVisible } = this.state;
        return ( 
            <div className="col-md-8 mb-4">
                <div className="card" onClick={this.onClickEvent}>
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">{name}</h4>
                        <i className="far fa-trash-alt" style={{cursor: 'pointer'}}></i>
                    </div>
                    {
                        isVisible ? <div className="card-body">
                        <p className="card-text">Departman: {department}</p>
                        <p className="card-text">Maaş: {salary}</p>
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}

export default User;