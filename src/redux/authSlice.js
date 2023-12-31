import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
        register: {
            isFetching: false,
            success: false,
            error: false,
        },
        logout: {
            isFetching: false,
            success: false,
            error: false,
        },
        edit: {
            isFetching: false,
            success: false,
            error: false,
        },
        getCart: {
            isFetching: false,
            cart: null,
            error: false,
        },
        getWish: {
            isFetching: false,
            wishlist: null,
            error: false,
        },
        updateOrderInfo: {
            isFetching: false,
            success: false,
            error: false,
        },
        getInfoDetail: {
            isFetching: false,
            infoDetail: null,
            error: false,
        },
        getMyOrder: {
            isFetching: false,
            myOrder: null,
            error: false,
        },
        getMyOrderHistory: {
            isFetching: false,
            myOrderHistory: null,
            error: false,
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.success = true;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
        },
        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        logoutSuccess: (state, action) => {
            state.logout.isFetching = false;
            state.login.currentUser = null;
        },
        logoutFailed: (state, action) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        },
        editStart: (state) => {
            state.edit.isFetching = true;
        },
        editSuccess: (state) => {
            state.edit.isFetching = false;
            state.edit.success = true;
        },
        editFailed: (state) => {
            state.edit.isFetching = false;
            state.edit.error = true;
        },
        getCartStart: (state) => {
            state.getCart.isFetching = true;
        },
        getCartSuccess: (state, action) => {
            state.getCart.isFetching = false;
            state.getCart.cart = action.payload;
        },
        getCartFailed: (state) => {
            state.getCart.isFetching = false;
            state.getCart.error = true;
        },
        getWishStart: (state) => {
            state.getWish.isFetching = true;
        },
        getWishSuccess: (state, action) => {
            state.getWish.isFetching = false;
            state.getWish.wishlist = action.payload;
        },
        getWishFailed: (state) => {
            state.getWish.isFetching = false;
            state.getWish.error = true;
        },
        updateOrderInfoStart: (state) => {
            state.updateOrderInfo.isFetching = true;
        },
        updateOrderInfoSuccess: (state) => {
            state.updateOrderInfo.isFetching = false;
            state.updateOrderInfo.success = true;
        },
        updateOrderInfoFailed: (state) => {
            state.updateOrderInfo.isFetching = false;
            state.updateOrderInfo.error = true;
        },
        getInfoDetailStart: (state) => {
            state.getInfoDetail.isFetching = true;
        },
        getInfoDetailSuccess: (state, action) => {
            state.getInfoDetail.isFetching = false;
            state.getInfoDetail.infoDetail = action.payload;
        },
        getInfoDetailFailed: (state) => {
            state.getInfoDetail.isFetching = false;
            state.getInfoDetail.error = true;
        },
        getMyOrderStart: (state) => {
            state.getMyOrder.isFetching = true;
        },
        getMyOrderSuccess: (state, action) => {
            state.getMyOrder.isFetching = false;
            state.getMyOrder.myOrder = action.payload;
        },
        getMyOrderFailed: (state) => {
            state.getMyOrder.isFetching = false;
            state.getMyOrder.error = true;
        },
        getMyOrderHistoryStart: (state) => {
            state.getMyOrderHistory.isFetching = true;
        },
        getMyOrderHistorySuccess: (state, action) => {
            state.getMyOrderHistory.isFetching = false;
            state.getMyOrderHistory.myOrderHistory = action.payload;
        },
        getMyOrderHistoryFailed: (state) => {
            state.getMyOrderHistory.isFetching = false;
            state.getMyOrderHistory.error = true;
        },
    },
});
export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
    editStart,
    editSuccess,
    editFailed,
    getCartStart,
    getCartSuccess,
    getCartFailed,
    getWishStart,
    getWishSuccess,
    getWishFailed,
    updateOrderInfoStart,
    updateOrderInfoSuccess,
    updateOrderInfoFailed,
    getInfoDetailStart,
    getInfoDetailSuccess,
    getInfoDetailFailed,
    getMyOrderStart,
    getMyOrderSuccess,
    getMyOrderFailed,
    getMyOrderHistoryStart,
    getMyOrderHistorySuccess,
    getMyOrderHistoryFailed,
} = authSlice.actions;
export default authSlice.reducer;
