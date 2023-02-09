import {
  BUY_MOBILE_SUCCESS,
  GET_ALL_USERS_DATA_FAILED,
  GET_ALL_USERS_DATA_SUCCESS,
  BUY_LAPTOP_SUCCESS,
} from "../action/actionTypes";

const initialState = {
  numOfLaptops: 100,
  numofMobiles: 500,
  users:[],
  error:'',
};

export const LatopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOP_SUCCESS:
      return { numOfLaptops: state.numOfLaptops - 1 };
    default:
      return state;
  }
};

export const MobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MOBILE_SUCCESS:
      return { numofMobiles: state.numofMobiles - 1 };
    default:
      return state;
  }
};

export const usersReducer = (state = initialState, action) => {
    console.log('type=========',action.type,action.data)
  switch (action.type) {
    case GET_ALL_USERS_DATA_SUCCESS:
      return { ...state, users: action.data};
    case GET_ALL_USERS_DATA_FAILED:
      return {...state, error: action.data };
    default:
      return state;
  }
};
