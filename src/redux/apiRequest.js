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
    getOrderFailed,
    getOrderStart,
    getOrderSuccess,
    getWishFailed,
    getWishStart,
    getWishSuccess,
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
    orderFailed,
    orderStart,
    orderSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
    updateOrderInfoFailed,
    updateOrderInfoStart,
    updateOrderInfoSuccess,
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
export const order = async (id, dispatch) => {
    dispatch(orderStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/auth/order/', id);
        dispatch(orderSuccess(res.data));
    } catch (err) {
        dispatch(orderFailed());
    }
};
export const getOrder = async (id, dispatch) => {
    dispatch(getOrderStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/auth/order/', id);
        dispatch(getOrderSuccess(res.data));
    } catch (err) {
        dispatch(getOrderFailed());
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
export const updatePaymentInfo = async (id, dispatch, newInfo) => {
    dispatch(updateOrderInfoStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/auth/order/info/' + id, {
            cardNumber: newInfo.cardNumber,
            cardMonth: newInfo.cardMonth,
            cardYear: newInfo.cardYear,
            cvv: newInfo.cvv,
        });
        dispatch(updateOrderInfoSuccess(res.data));
        // navigate('/order-shipping');
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
