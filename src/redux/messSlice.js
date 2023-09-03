import { createSlice } from '@reduxjs/toolkit';
const messSlice = createSlice({
    name: 'message',
    initialState: {
        addNewMessage: {
            isFetChing: false,
            success: false,
            error: false,
        },
    },
    reducers: {
        addNewMessageStart: (state) => {
            state.addNewMessage.isFetChing = true;
        },
        addNewMessageSuccess: (state) => {
            state.addNewMessage.isFetChing = false;
            state.addNewMessage.success = true;
        },
        addNewMessageFailed: (state) => {
            state.addNewMessage.isFetChing = false;
            state.addNewMessage.error = true;
        },
    },
});
export const { addNewMessageStart, addNewMessageSuccess, addNewMessageFailed } = messSlice.actions;
export default messSlice.reducer;
