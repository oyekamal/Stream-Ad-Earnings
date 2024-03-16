import { call, put, takeEvery } from "redux-saga/effects";
import { getUserFailed, getUserSuccess } from ".";

export function* getUserInfo({ payload }: any): any {
  const requestUrl = `http://127.0.0.1:8000/login`;
  try {
    const data = yield call(() =>
      fetch(requestUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
    );
    const parsedData = yield data.json();
    yield put(getUserSuccess(parsedData));
  } catch (err) {
    yield put(getUserFailed());
  }
}

function* adminSaga() {
  yield takeEvery("admin/getUser", getUserInfo);
}

export default adminSaga;

// export function* createUserSage(action: any) {
//     console.log("createUserSage")
//     console.log(action);
//     yield CreateUserAPI(action.user);
//     yield put(addUsersSlice(action.user));
// };

// export function* editUserSage(action: any) {
//     console.log("editUserSage")
//     console.log(action);
//     yield UpdateUserAPI(action.user);
//     yield put(editUsersSlice(action.user));
// };

// export function* deleteUserSage(action: any) {
//     console.log("deleteUserSage")
//     yield deleteUserBtIdAPI(action.id);
//     yield put(deleteUsersSlice(action.id));
// };
