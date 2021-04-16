import { createSlice } from '@reduxjs/toolkit';


createSlice ({
    name: "Counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
})

