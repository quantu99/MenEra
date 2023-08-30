import { createSlice } from '@reduxjs/toolkit';
const orderSlice = createSlice({
    name: 'order',
    initialState: {
        addNewOrder: {
            isFetching: false,
            success: false,
            error: false,
        },
        getOrderDetail: {
            isFetching: false,
            orderDetail: false,
            error: false,
        },
        pushToHistory: {
            isFetching: false,
            success: false,
            error: false,
        },
    },
    reducers: {
        addNewOrderStart: (state) => {
            state.addNewOrder.isFetching = true;
        },
        addNewOrderSuccess: (state) => {
            state.addNewOrder.isFetching = false;
            state.addNewOrder.success = true;
        },
        addNewOrderFailed: (state) => {
            state.addNewOrder.isFetching = false;
            state.addNewOrder.error = true;
        },
        getOrderDetailStart: (state) => {
            state.getOrderDetail.isFetching = true;
        },
        getOrderDetailSuccess: (state, action) => {
            state.getOrderDetail.isFetching = false;
            state.getOrderDetail.orderDetail = action.payload;
        },
        getOrderDetailFailed: (state) => {
            state.getOrderDetail.isFetching = false;
            state.getOrderDetail.error = true;
        },
        pushToHistoryStart: (state) => {
            state.pushToHistory.isFetching = true;
        },
        pushToHistorySuccess: (state) => {
            state.pushToHistory.isFetching = false;
            state.pushToHistory.success = true;
        },
        pushToHistoryFailed: (state) => {
            state.pushToHistory.isFetching = false;
            state.pushToHistory.error = true;
        },
    },
});
export const {
    addNewOrderStart,
    addNewOrderSuccess,
    addNewOrderFailed,
    getOrderDetailStart,
    getOrderDetailFailed,
    getOrderDetailSuccess,
    pushToHistoryStart,
    pushToHistorySuccess,
    pushToHistoryFailed,
} = orderSlice.actions;
export default orderSlice.reducer;
