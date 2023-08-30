import { createSlice } from '@reduxjs/toolkit';
const orderHistorySlice = createSlice({
    name: 'order history',
    initialState: {
        getOrderHistoryDetail: {
            orderHistoryDetail: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        getOrderHistoryDetailStart: (state) => {
            state.getOrderHistoryDetail.isFetching = true;
        },
        getOrderHistoryDetailSuccess: (state, action) => {
            state.getOrderHistoryDetail.isFetching = false;
            state.getOrderHistoryDetail.orderHistoryDetail = action.payload;
        },
        getOrderHistoryDetailFailed: (state) => {
            state.getOrderHistoryDetail.isFetching = false;
            state.getOrderHistoryDetail.error = true;
        },
    },
});
export const { getOrderHistoryDetailStart, getOrderHistoryDetailSuccess, getOrderHistoryDetailFailed } =
    orderHistorySlice.actions;
export default orderHistorySlice.reducer;
