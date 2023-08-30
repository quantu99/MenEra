import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import userSlice from './userSlice';
import productsSlice from './productsSlice';
import orderSlice from './orderSlice';
import orderHistorySlice from './orderHistorySlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        products: productsSlice,
        order: orderSlice,
        orderHistory: orderHistorySlice,
    },
});
export default store;
