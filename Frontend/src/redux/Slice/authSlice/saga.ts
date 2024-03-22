import { call, put, takeEvery } from "redux-saga/effects";
import {
  LoginUserSuccess,
  LoginUserFailed,
  signInUserSuccess,
  signInUserFailed,
} from "./index";
import { message } from "antd";
import Cookies from "js-cookie";

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
    message.success("Login Successfull");
    Cookies.set("userData", JSON.stringify(parsedData));
  } catch (err) {
    yield put(LoginUserFailed());
    message.error("Login Failed");
  }
}

export function* signupUser({ payload }: any): any {
  const requestUrl = `http://localhost:8000/auth/register/`;
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
    yield put(signInUserSuccess());
    message.success(parsedData?.detail);
  } catch (err) {
    yield put(signInUserFailed());
    message.error("Sign up failed");
  }
}

function* userSaga() {
  yield takeEvery("user/LoginUser", loginUser);
  yield takeEvery("user/signInUser", signupUser);
}

export default userSaga;
