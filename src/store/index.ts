import { configureStore } from "@reduxjs/toolkit";
import test from '@store/modules/testStore'
const store = configureStore({
    reducer: {
        test
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store