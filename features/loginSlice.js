import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName : "Daksh",
    userState : false
}

export const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers : {
        handleParentCallback : (state, action) => {
            state.userName = action.payload;
            state.userState = true;
            console.log("I was called");
            state.userState ? console.log("userState = true") : console.log("userState = false");
        },
        handleLogout : (state) => {
            state.userState = false;
        }
    }
})

// Export in destructured form

export const userName = (state) => state.userName;
export const userState = (state) => state.userState; // bool
export const { handleParentCallback, handleLogout } = loginSlice.actions;
export default loginSlice.reducer;