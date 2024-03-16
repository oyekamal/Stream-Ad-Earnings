import { createSlice } from "@reduxjs/toolkit";

export interface UserDetails {
  username: String;
  email: String;
  id: String;
  password: String;
}

export interface LoginDetails {
  id: String;
  loading: boolean;
  error: boolean;
}

export interface UserState {
  userDetails: UserDetails;
  loginDetails: LoginDetails;
}

export const initialState: UserState = {
  loginDetails: {
    id: "",
    loading: false,
    error: false,
  },
  userDetails: {
    username: "",
    email: "",
    id: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginUser: (state) => {
      state.loginDetails.loading = true;
    },
    LoginUserFailed: (state) => {
      state.loginDetails.error = true;
    },
    LoginUserSuccess: (state, action) => {
      state.loginDetails.id = action.payload;
    },
    setUserSlice: (state, action) => {
      state = action.payload;
      console.log(state);
    },
    changeName: (state, action) => {
      state.userDetails.username = action.payload;
    },
    changeEmail: (state, action) => {
      state.userDetails.email = action.payload;
    },
    changePassword: (state, action) => {
      state.userDetails.password = action.payload;
    },
  },
});

export const {
  setUserSlice,
  changeName,
  changeEmail,
  changePassword,
  LoginUser,
  LoginUserFailed,
  LoginUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
