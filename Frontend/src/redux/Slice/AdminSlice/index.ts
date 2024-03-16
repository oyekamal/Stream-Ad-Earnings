import { createSlice } from "@reduxjs/toolkit";

export interface UserDetails {
  username: String;
  email: String;
  id: String;
  password: String;
}

export interface UserState {
  user: UserDetails[];
  loading: boolean;
  error: boolean;
}

export interface AdminState {
  userData: UserState;
}

export const initialState: AdminState = {
  userData: {
    user: [],
    loading: false,
    error: false,
  },
};

const users = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getUser: (state) => {
      state.userData.loading = true;
    },
    getUserSuccess: (state, action) => {
      state.userData.user = action.payload;
    },
    getUserFailed: (state) => {
        state.userData.loading = false;
        state.userData.error = true;
    },

    // addUsersSlice: (state, action) => {
    //   state.push(action.payload);
    //   return state;
    // },
    // editUsersSlice: (state, action) => {
    //   state = state.map((i) =>
    //     i.id == action.payload.id ? action.payload : i
    //   );
    //   return state;
    // },
    // deleteUsersSlice: (state, action) => {
    //   state = state.filter((i) => i.id !== action.payload);
    //   return state;
    // },
  },
});

export const { getUser, getUserFailed, getUserSuccess } = users.actions;
export default users.reducer;
