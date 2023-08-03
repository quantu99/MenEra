import axios from 'axios';
import {
    editFailed,
    editStart,
    editSuccess,
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from './authSlice';
import { getAllUsersFailed, getAllUsersStart, getAllUsersSuccess } from './userSlice';
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
