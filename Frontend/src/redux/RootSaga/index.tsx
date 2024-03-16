import { fork, all } from "redux-saga/effects";
import userSaga from "../Slice/UserSlice/saga";

function* rootSaga() {
    yield all([
      fork(userSaga),
    ]);
  }
  
  export default rootSaga;
  