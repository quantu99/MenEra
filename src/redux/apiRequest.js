import axios from 'axios';
import {
    editFailed,
    editStart,
    editSuccess,
    getCartFailed,
    getCartStart,
    getCartSuccess,
    getInfoDetailFailed,
    getInfoDetailStart,
    getInfoDetailSuccess,
    getWishFailed,
    getWishStart,
    getWishSuccess,
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
    updateOrderInfoFailed,
    updateOrderInfoStart,
    updateOrderInfoSuccess,
    getMyOrderFailed,
    getMyOrderStart,
    getMyOrderSuccess,
    getMyOrderHistoryStart,
    getMyOrderHistoryFailed,
    getMyOrderHistorySuccess,
} from './authSlice';
import { getAllUsersFailed, getAllUsersStart, getAllUsersSuccess } from './userSlice';
import {
    cartFailed,
    cartStart,
    cartSuccess,
    deleteCartFailed,
    deleteCartStart,
    deleteCartSuccess,
    deleteWishFailed,
    deleteWishStart,
    deleteWishSuccess,
    getAllProductsFailed,
    getAllProductsStart,
    getAllProductsSuccess,
    getDetailFailed,
    getDetailStart,
    getDetailSuccess,
    wishFailed,
    wishStart,
    wishSuccess,
} from './productsSlice';
import {
    addNewOrderFailed,
    addNewOrderStart,
    addNewOrderSuccess,
    getOrderDetailFailed,
    getOrderDetailStart,
    getOrderDetailSuccess,
    pushToHistoryFailed,
    pushToHistoryStart,
    pushToHistorySuccess,
} from './orderSlice';
import {
    getOrderHistoryDetailFailed,
    getOrderHistoryDetailStart,
    getOrderHistoryDetailSuccess,
} from './orderHistorySlice';
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('https://emc-api.onrender.com/v1/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (err) {
        dispatch(loginFailed());
    }
};
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post('https://emc-api.onrender.com/v1/auth/register', user);
        dispatch(registerSuccess(res.data));
        navigate('/register-success');
    } catch (err) {
        dispatch(registerFailed());
    }
};
export const getAllUsers = async (dispatch) => {
    dispatch(getAllUsersStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/user');
        dispatch(getAllUsersSuccess(res.data));
    } catch (err) {
        dispatch(getAllUsersFailed());
    }
};
export const logoutUsers = async (accessToken, id, dispatch, navigate, axiosJWT) => {
    dispatch(logoutStart());
    try {
        await axiosJWT.post('https://emc-api.onrender.com/v1/auth/logout', id, {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(logoutSuccess());
        navigate('/login');
    } catch (err) {
        dispatch(logoutFailed());
    }
};
export const editUsers = async (accessToken, id, newPassword, dispatch, axiosJWT) => {
    dispatch(editStart());
    try {
        const res = await axiosJWT.put(
            'https://emc-api.onrender.com/v1/auth/' + id,
            {
                password: newPassword,
            },
            {
                headers: {
                    token: `Bearer ${accessToken}`,
                },
            },
        );
        dispatch(editSuccess(res.data));
    } catch (err) {
        dispatch(editFailed());
    }
};
export const getAllProducts = async (dispatch) => {
    dispatch(getAllProductsStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/products');
        dispatch(getAllProductsSuccess(res.data));
    } catch (err) {
        dispatch(getAllProductsFailed());
    }
};
export const getProductDetail = async (dispatch, id, navigate) => {
    dispatch(getDetailStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/products/' + id);
        dispatch(getDetailSuccess(res.data));
        navigate(`/${id}`);
    } catch (err) {
        dispatch(getDetailFailed());
    }
};
export const addToCart = async (id, userId, dispatch) => {
    dispatch(cartStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/products/add/' + id, {
            user: userId,
        });
        dispatch(cartSuccess(res.data));
    } catch (err) {
        dispatch(cartFailed());
    }
};
export const deleteFromCart = async (id, userId, dispatch) => {
    dispatch(deleteCartStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/products/delete/' + id, {
            user: userId,
        });
        dispatch(deleteCartSuccess(res.data));
    } catch (err) {
        dispatch(deleteCartFailed());
    }
};
export const addToWish = async (id, userId, dispatch) => {
    dispatch(wishStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/products/add/wish/' + id, {
            user: userId,
        });
        dispatch(wishSuccess(res.data));
    } catch (err) {
        dispatch(wishFailed());
    }
};
export const deleteFromWish = async (id, userId, dispatch) => {
    dispatch(deleteWishStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/products/delete/wish/' + id, {
            user: userId,
        });
        dispatch(deleteWishSuccess(res.data));
    } catch (err) {
        dispatch(deleteWishFailed());
    }
};
export const getCart = async (id, dispatch) => {
    dispatch(getCartStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/auth/cart/' + id);
        dispatch(getCartSuccess(res.data));
    } catch (err) {
        dispatch(getCartFailed());
    }
};
export const getWish = async (id, dispatch) => {
    dispatch(getWishStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/auth/wish/' + id);
        dispatch(getWishSuccess(res.data));
    } catch (err) {
        dispatch(getWishFailed());
    }
};
export const updateOrderInfo = async (id, dispatch, navigate, newInfo) => {
    dispatch(updateOrderInfoStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/auth/order/info/' + id, {
            email: newInfo.email,
            phone: newInfo.phone,
            address: newInfo.address,
        });
        dispatch(updateOrderInfoSuccess(res.data));
        navigate('/order-shipping');
    } catch (err) {
        dispatch(updateOrderInfoFailed());
    }
};
export const updatePaymentInfo = async (id, dispatch, newInfo, navigate) => {
    dispatch(updateOrderInfoStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/auth/order/info/' + id, {
            cardNumber: newInfo.cardNumber,
            cardMonth: newInfo.cardMonth,
            cardYear: newInfo.cardYear,
            cvv: newInfo.cvv,
        });
        dispatch(updateOrderInfoSuccess(res.data));
        navigate('/order-complete');
    } catch (err) {
        dispatch(updateOrderInfoFailed());
    }
};
export const getInfoDetail = async (id, dispatch) => {
    dispatch(getInfoDetailStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/user/' + id);
        dispatch(getInfoDetailSuccess(res.data));
    } catch (err) {
        dispatch(getInfoDetailFailed());
    }
};
export const addNewOrder = async (userId, dispatch, navigate) => {
    dispatch(addNewOrderStart());
    try {
        const res = await axios.post('https://emc-api.onrender.com/v1/order/add', {
            userId: userId,
        });
        dispatch(addNewOrderSuccess(res.data));
        navigate('/my-order');
    } catch (err) {
        dispatch(addNewOrderFailed());
    }
};
export const getMyOrder = async (id, dispatch) => {
    dispatch(getMyOrderStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/auth/order/' + id);
        dispatch(getMyOrderSuccess(res.data));
    } catch (err) {
        dispatch(getMyOrderFailed());
    }
};
export const getMyOrderHistory = async (id, dispatch) => {
    dispatch(getMyOrderHistoryStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/auth/order-history/' + id);
        dispatch(getMyOrderHistorySuccess(res.data));
    } catch (err) {
        dispatch(getMyOrderHistoryFailed());
    }
};
export const getOrderDetail = async (id, dispatch, navigate) => {
    dispatch(getOrderDetailStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/order/' + id);
        dispatch(getOrderDetailSuccess(res.data));
        navigate(`/my-order-detail/${id}`);
    } catch (err) {
        dispatch(getOrderDetailFailed());
    }
};
export const getOrderHistoryDetail = async (id, dispatch, navigate) => {
    dispatch(getOrderHistoryDetailStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/order-history/' + id);
        dispatch(getOrderHistoryDetailSuccess(res.data));
        navigate(`/my-order-history-detail/${id}`);
    } catch (err) {
        dispatch(getOrderHistoryDetailFailed());
    }
};
export const pushToHistory = async (id, dispatch, navigate) => {
    dispatch(pushToHistoryStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/order/order-to-history/' + id);
        dispatch(pushToHistorySuccess(res.data));
    } catch (err) {
        dispatch(pushToHistoryFailed());
    }
};
