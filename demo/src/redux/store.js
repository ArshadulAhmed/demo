import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";


export default configureStore({
    reducer: {
        toDo: counterSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
});