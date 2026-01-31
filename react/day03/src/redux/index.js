import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterReducer";
import { movieReducer } from "./reducers/movieReducer";

export const myStore = configureStore({
	reducer: {
		counterSlice: counterReducer,
		movieSlice: movieReducer,
	},
});
