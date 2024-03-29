import { fork, all } from "redux-saga/effects";
import userSaga from "../Slice/authSlice/saga";
import adGroupSaga from "../Slice/AdGroupSlice/saga";
import adSaga from "../Slice/AdSlice/saga";
function* rootSaga() {
    yield all([
      fork(userSaga),
      fork(adGroupSaga),
      fork(adSaga),
    ]);
  }
  
  export default rootSaga;
  