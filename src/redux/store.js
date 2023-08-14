import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import userSlice from './userSlice';
import productsSlice from './productsSlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        products: productsSlice,
    },
});
export default store;
