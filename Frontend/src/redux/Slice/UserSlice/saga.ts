import { call, put, takeEvery } from "redux-saga/effects";
import { LoginUserSuccess, LoginUserFailed } from "../UserSlice/index";

export function* loginUser({ payload }: any): any {

  const requestUrl = `http://localhost:8000/auth/login/`;
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
    yield put(LoginUserSuccess(parsedData));
  } catch (err) {
    yield put(LoginUserFailed());
  }
}

function* userSaga() {
  yield takeEvery("user/LoginUser", loginUser);
}

export default userSaga;
