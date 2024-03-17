import { createSlice } from "@reduxjs/toolkit";

export interface LoginDetails {
  id: String;
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
    id: "",
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
      state.loginDetails.id = action.payload;
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
