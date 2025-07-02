import { createSlice } from "@reduxjs/toolkit";

const test = createSlice({
    name: 'test',
    initialState: {
        count: 0
    },
    reducers: {
        add: (state) => {
            state.count ++
        }
    }
})
const {add} = test.actions

export {add}
const reducer = test.reducer
export default reducer