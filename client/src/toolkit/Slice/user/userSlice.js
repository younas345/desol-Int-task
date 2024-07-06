import { createSlice } from '@reduxjs/toolkit';
import { submitLogin } from './userThunk';

const initialState = {
    status: 'idle',
    error: null,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitLogin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload
            })
            .addCase(submitLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    },
});

export default userSlice.reducer;
