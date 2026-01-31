import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";
import { movieReducer } from "./slices/movieSlice";
import { productReducer } from "./slices/productSlice";

export const myStore = configureStore({
	reducer: {
		counterSlice: counterReducer,
		movieSlice: movieReducer,
		productSlice: productReducer,
	},
});
