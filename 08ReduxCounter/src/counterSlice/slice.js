import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increseValue: (state, action) => {
            state.value = action.payload;
        },
        decreseValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { increseValue, decreseValue } = slice.actions
export default slice.reducer