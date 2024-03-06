import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
    name: "users",
    initialState: [{
        id: 0,
        name: "",
        email: "",
        password: "",
    }],
    reducers: {
        getUsersSlice: (state, action) => {
            state = action.payload;
            return state;
        },
        addUsersSlice: (state, action) => {
            state.push(action.payload);
            return state;
        },
        editUsersSlice: (state, action) => {
            state = state.map(i => i.id == action.payload.id ? action.payload : i);
            return state;
        },
        deleteUsersSlice: (state, action) => {
            state = state.filter(i => i.id !== action.payload);
            return state;
        },
    }
});

export const { getUsersSlice, addUsersSlice, editUsersSlice, deleteUsersSlice } = users.actions;
export default users.reducer