import {createSlice} from "@reduxjs/toolkit";

interface CounterState {
    values: number;
}

const initialState: CounterState = {
    values: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.values += 1;
        },
        decrement: (state) => {
            state.values -= 1;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;