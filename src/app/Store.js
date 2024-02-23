import { configureStore } from "@reduxjs/toolkit";
import  userDetails  from "../features/UserDetailsSlice";


export const Store = configureStore({
    reducer: {
        xyz: userDetails,
    },
});