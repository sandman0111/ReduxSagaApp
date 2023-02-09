import { delay } from "@redux-saga/core/effects";
import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* buyMobile() {
  yield delay(2000);
  yield put({ type: "BUY_MOBILE_SUCCESS" });
}

function* buyLaptop() {
  yield put({ type: "BUY_LAPTOP_SUCCESS" });
}

function* getAllUsers() {
  let users = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log('sandy=====len',users.data)
  try {
    yield put({ type: "GET_ALL_USERS_DATA_SUCCESS", data: users.data });
    console.log('data--------------',users.data.length)
  } catch (error) {
    yield put({ type: "GET_ALL_USERS_DATA_FAILED" });
  }
}

export function* watchUser() {
  yield all([
    takeLatest("BUY_MOBILE", buyMobile),
    takeLatest("FETCH_ALL_USERS", getAllUsers),
    takeLatest("BUY_LAPTOP", buyLaptop),
  ]);
}

// export function* watchUser() {
//     yield all([
//       takeLatest('BUY_MOBILE', buyMobile),
//     //   takeLatest('SELL_MOBILE', sellMobile),
//     //   takeLatest('GET_ALL_USERS', getAllUsers),
//     //   takeLatest('GET_SINGLE_USER', getSingleUser),
//     //   takeLatest('ADD_USER', addUser),
//     //   takeLatest('EDIT_USER', editUser),
//     //   takeLatest('DELETE_USER', deleteUser),
//     ]);
//   }
