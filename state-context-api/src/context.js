/* eslint-disable default-case */
import React, {Component} from "react";

const UserContext = React.createContext();
//Provider - Üretici, Consumer - Tüketici

const reducer = (state, action) => {
    switch(action.type){
        case "deleteUser":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        default: 
            return state;
    }
}

export class UserProvider extends Component{

    state = {
        users: [
          {id: 1, name: "Kaan", department: "Bilişim", salary: "7.000$"},
          {id: 2, name: "Onur", department: "Bilişim", salary: "7.000$"},
          {id: 3, name: "Ege", department: "Bilişim", salary: "7.000$"},
          {id: 4, name: "Esat", department: "Bilişim", salary: "7.000$"},
          {id: 5, name: "Onat", department: "Bilişim", salary: "7.000$"}
        ],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render(){
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
