import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	addNewProduct,
	deleteProduct,
	getAllProduct,
} from "../../api/productApi";

const initialState = {
	products: [],
	errors: null,
	isLoading: false,
};

// pending-fullfilled-rejected

// thunkmiddleware -- createAsyncThunk

export const getAllProductAction = createAsyncThunk(
	"product/getAllProductAction",
	async (_, { rejectWithValue }) => {
		try {
			const response = await getAllProduct();
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const addProductAction = createAsyncThunk(
	"product/addProductAction",
	async (product, { rejectWithValue }) => {
		try {
			const response = await addNewProduct(product);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const deleteProductAction = createAsyncThunk(
	"product/deleteProductAction",
	async (productId, { rejectWithValue }) => {
		try {
			const response = await deleteProduct(productId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductAction.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getAllProductAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		});
		builder.addCase(getAllProductAction.rejected, (state, action) => {
			state.isLoading = false;
			state.errors = action.payload.message;
		});
		builder.addCase(deleteProductAction.fulfilled, (state, action) => {
			state.products = state.products.filter(
				(product) => product.id != action.payload.id,
			);
		});
	},
});

// getAllProductAction--

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
