import { createSlice } from '@reduxjs/toolkit';
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        getAllProducts: {
            allProducts: null,
            isFetching: false,
            error: false,
        },
        getProductDetail: {
            productDetail: null,
            isFetching: false,
            error: false,
        },
        addToCart: {
            isFetching: false,
            success: false,
            error: false,
        },
        deleteFromCart: {
            isFetching: false,
            success: false,
            error: false,
        },
    },
    reducers: {
        getAllProductsStart: (state) => {
            state.getAllProducts.isFetching = true;
        },
        getAllProductsSuccess: (state, action) => {
            state.getAllProducts.isFetching = false;
            state.getAllProducts.allProducts = action.payload;
        },
        getAllProductsFailed: (state) => {
            state.getAllProducts.isFetching = false;
            state.getAllProducts.error = true;
        },
        getDetailStart: (state) => {
            state.getProductDetail.isFetching = true;
        },
        getDetailSuccess: (state, action) => {
            state.getProductDetail.isFetching = false;
            state.getProductDetail.productDetail = action.payload;
        },
        getDetailFailed: (state) => {
            state.getProductDetail.isFetching = false;
            state.getProductDetail.error = true;
        },
        cartStart: (state) => {
            state.addToCart.isFetching = true;
        },
        cartSuccess: (state) => {
            state.addToCart.isFetching = false;
            state.addToCart.success = true;
        },
        cartFailed: (state) => {
            state.addToCart.isFetching = false;
            state.addToCart.error = true;
        },
        deleteCartStart: (state) => {
            state.deleteFromCart.isFetching = true;
        },
        deleteCartSuccess: (state) => {
            state.deleteFromCart.isFetching = false;
            state.deleteFromCart.success = true;
        },
        deleteCartFailed: (state) => {
            state.deleteFromCart.isFetching = false;
            state.deleteFromCart.error = true;
        },
    },
});
export const {
    getAllProductsStart,
    getAllProductsSuccess,
    getAllProductsFailed,
    getDetailStart,
    getDetailSuccess,
    getDetailFailed,
    cartStart,
    cartSuccess,
    cartFailed,
    deleteCartStart,
    deleteCartSuccess,
    deleteCartFailed,
} = productsSlice.actions;
export default productsSlice.reducer;
