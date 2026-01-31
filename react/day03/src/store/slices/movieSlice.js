import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movie",
	initialState: [{ id: 1, name: "Book" }],
	reducers: {
		add: (state, action) => {
			state.push({ id: 2, name: "Pen" });
		},
	},
});

export const movieReducer = movieSlice.reducer;
export const movieActions = movieSlice.actions;
