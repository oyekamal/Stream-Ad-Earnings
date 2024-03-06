import { call, put, takeEvery } from 'redux-saga/effects';
import { CreateUserAPI, UpdateUserAPI, deleteUserBtIdAPI, getUserByIdAPI, getUsersAPI } from '../../apis';
import { addUsersSlice, deleteUsersSlice, editUsersSlice, getUsersSlice } from '../slice/users';
import { setUserSlice } from '../slice/user';
import { CREATE_USER, DELETE_USER_BY_ID, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID } from '../types';

export function* getUserSage() {
 try {
    // Assuming getUsersAPI returns a promise that resolves with users data
    const users = yield call(getUsersAPI);
    
    // Assuming getUsersSlice is an action creator that returns an action object
    // If not, replace this with the correct action object or action creator
    const action = getUsersSlice(users.data);
    
    // Dispatch the action to the store
    yield put(action);
 } catch (error) {
    console.error("Error fetching users:", error);
    // Optionally, dispatch an error action here
 }
};


export function* getUserByIdSage(action: any) {
    yield getUserByIdAPI(action.id);
    yield put(setUserSlice(action.id));
};


export function* createUserSage(action: any) {
    console.log("createUserSage")
    console.log(action);
    yield CreateUserAPI(action.user);
    yield put(addUsersSlice(action.user));
};


export function* editUserSage(action: any) {
    console.log("editUserSage")
    console.log(action);
    yield UpdateUserAPI(action.user);
    yield put(editUsersSlice(action.user));
};

export function* deleteUserSage(action: any) {
    console.log("deleteUserSage")
    yield deleteUserBtIdAPI(action.id);
    yield put(deleteUsersSlice(action.id));
};


export function* watchUserAsync() {
    yield takeEvery(GET_USERS, getUserSage)
    yield takeEvery(GET_USER_BY_ID, getUserByIdSage)
    yield takeEvery(CREATE_USER, createUserSage)
    yield takeEvery(UPDATE_USER_BY_ID, editUserSage)
    yield takeEvery(DELETE_USER_BY_ID, deleteUserSage)

};