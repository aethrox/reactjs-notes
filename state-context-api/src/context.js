import React, {Component} from "react";

const UserContext = React.createContext();
//Provider - Üretici, Consumer - Tüketici

export class UserProvider extends Component{

    state = {
        users: [
          {name: "Kaan", department: "Bilişim", salary: "7.000$"},
          {name: "Onur", department: "Bilişim", salary: "7.000$"},
          {name: "Ege", department: "Bilişim", salary: "7.000$"},
          {name: "Esat", department: "Bilişim", salary: "7.000$"},
          {name: "Onat", department: "Bilişim", salary: "7.000$"}
        ]
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
