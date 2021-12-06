import {combineReducers} from 'redux'
interface UserModel {
  id: string
  firstname: string
  lastname: string
  phoneNumber: string
  age: number
}

const initialStateUser : UserModel = {
  id: "",
  firstname: "Bilinmiyor",
  lastname: "Bilinmiyor",
  phoneNumber: "Bilinmiyor",
  age: 0
}

interface UsersModel {
  users: []
}

const initialStateUsers : UsersModel = {
  users: []
}

export const ADD_USER = "ADD_USER";
export const DEL_USER = "DEL_USER";

interface AddUser {
  type: typeof ADD_USER
  payload: object | string | number
}

interface DelUser {
  type: typeof DEL_USER
  payload: object | string | number
}

export type userAction = AddUser | DelUser

const UserReducer = (state: UsersModel = initialStateUsers, action: userAction)=> {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload]
      }
    case DEL_USER:
      return {
        users: state.users.filter(user => action.payload !== user.id);
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: UserReducer
});

export default rootReducer;