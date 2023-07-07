import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      //state.count=state.count+1
    },
    decrement: (state) => {
      state.count -= 1;
      //state.count=state.count-1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { decrement, increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
