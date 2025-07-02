import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/userStore";
const store = configureStore({
    reducer: {
        user:userReducer
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store