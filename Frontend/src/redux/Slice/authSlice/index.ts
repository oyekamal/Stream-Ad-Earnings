import { createSlice } from "@reduxjs/toolkit";


export interface currentUserData {
  key: String,
  detail: String,
  email: String,
  username: String,
  first_name: String,
  last_name: String,
  id: Number
}
export interface LoginDetails {
  currentUserData: currentUserData;
  loading: boolean;
  error: boolean;
}
export interface SigninDetails {
  loading: boolean;
  error: boolean;
}

export interface UserState {
  loginDetails: LoginDetails;
  signinDetails: SigninDetails;
}

export const initialState: UserState = {
  loginDetails: {
    currentUserData: {
      key: "",
      detail: "",
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      id: 0
    },
    loading: false,
    error: false,
  },
  signinDetails: {
    loading: false,
    error: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginUser: (state) => {
      state.loginDetails.loading = true;
    },
    LoginUserSuccess: (state, action) => {
      state.loginDetails.currentUserData = action.payload;
    },
    LoginUserFailed: (state) => {
      state.loginDetails.error = true;
    },
    signInUser: (state) => {
      state.signinDetails.loading = true;
    },
    signInUserSuccess: (state) => {
      state.signinDetails.loading = false;
    },
    signInUserFailed: (state) => {
      state.signinDetails.loading = false;
      state.loginDetails.error = true;
    },
  },
});

export const {
  LoginUser,
  LoginUserFailed,
  LoginUserSuccess,
  signInUser,
  signInUserSuccess,
  signInUserFailed,
} = userSlice.actions;

export default userSlice.reducer;
