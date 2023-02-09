import {
  BUY_LAPTOP,
  BUY_MOBILE,
  FETCH_ALL_USERS,
  EDIT_USER,
  DELETE_USER,
} from "./actionTypes";
// import axios from "axios";
export const BuyLaptop = () => {
  return {
    type: BUY_LAPTOP,
  };
};

export const BuyMobile = () => {
  return {
    type: BUY_MOBILE,
  };
};

export const getAllUsers = () => {
  return {
    type: FETCH_ALL_USERS,
  };
};

export const editUsers = (payload,id) => {
  return {
    type: EDIT_USER,
    payload,id
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id
  };
};

// export const fetchUsers = ()=>{
//     return function(dispatch){
//       dispatch(fetchUsersRequest());
//       axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response=>{
//         let users = response.data.map(user=>user.id);
//         console.log('response-------------',users)
//         dispatch(fetchUsersSuccess(users))
//       })
//       .catch(error=>{
//         dispatch(fetchUsersFail(error))
//       })
//     }
//   }
