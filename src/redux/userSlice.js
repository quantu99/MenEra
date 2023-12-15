import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: 'user',
    initialState: {
        getAllUsers: {
            allUsers: null,
            isFetching: false,
            error: false,
        },
        getUserDetail: {
            userDetail: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        getAllUsersStart: (state) => {
            state.getAllUsers.isFetching = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.getAllUsers.isFetching = false;
            state.getAllUsers.allUsers = action.payload;
        },
        getAllUsersFailed: (state) => {
            state.getAllUsers.isFetching = false;
            state.getAllUsers.error = true;
        },
        getUserDetailStart: (state) => {
            state.getUserDetail.isFetching = true;
        },
        getUserDetailSuccess: (state, action) => {
            state.getUserDetail.isFetching = false;
            state.getUserDetail.userDetail = action.payload;
        },
        getUserDetailFailed: (state) => {
            state.getUserDetail.isFetching = false;
            state.getUserDetail.error = true;
        },
    },
});
export const {
    getAllUsersStart,
    getAllUsersSuccess,
    getAllUsersFailed,
    getUserDetailStart,
    getUserDetailSuccess,
    getUserDetailFailed,
} = userSlice.actions;
export default userSlice.reducer;
