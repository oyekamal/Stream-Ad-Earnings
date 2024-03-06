import { all } from "redux-saga/effects";
import { watchUserAsync } from "./user";

export function* rootSaga(){
    console.log("rootSaga");
     yield all([
        watchUserAsync()
     ])
}