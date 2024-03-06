import { createSlice } from "@reduxjs/toolkit";

const user =  createSlice({
    name: "user",
    initialState: {
        id: "0",
        name: "",
        email: "",
        password: "",
    },
    reducers: {
        setUserSlice: (state, action) => {
            state = action.payload;
            console.log(state);
            return state;
        },
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        },
        changePassword: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const { setUserSlice, changeName, changeEmail, changePassword } = user.actions;
export default user.reducer