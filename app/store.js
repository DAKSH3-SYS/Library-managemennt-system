import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "../features/loginSlice";
import topbarReducer from "../features/topbarSlice";
export const store = configureStore({
    reducer : {
        login : loginReducer, // Reducers for the counter feature
        //topbar : topbarReducer,
    }
})