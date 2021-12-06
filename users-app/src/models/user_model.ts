interface UserModel {
  firstname: string
  lastname: string
  phoneNumber: string
  age: number
}

interface UsersModel {
  users: object
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

const initialStateUser : UserModel = {
  firstname: "Bilinmiyor",
  lastname: "Bilinmiyor",
  phoneNumber: "Bilinmiyor",
  age: 0
}


const initialStateUsers : UsersModel = {
  users: {}
}

const UserReducer = (state: UsersModel = initialStateUsers, action: userAction)=> {
  switch (action.type) {
    case ADD_USER:
      return {
        users: []
      }
  
    default:
      return state
  }
}