import { fork, all } from "redux-saga/effects";
import userSaga from "../Slice/authSlice/saga";
import adSaga from "../Slice/AdGroupSlice/saga";
function* rootSaga() {
    yield all([
      fork(userSaga),
      fork(adSaga),
    ]);
  }
  
  export default rootSaga;
  