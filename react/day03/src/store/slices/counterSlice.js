import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 50 },
	reducers: {
		increase: (state, action) => {
			// createAction
			console.log(action);
			state.count += action.payload;
		},
		decrease: (state, action) => {
			console.log(action);
			state.count -= action.payload;
		},
	},
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
