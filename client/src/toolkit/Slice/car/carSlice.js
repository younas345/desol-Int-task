import { createSlice } from '@reduxjs/toolkit';
import { submitCar } from './carThunk';

const initialState = {
    status: 'idle',
    error: null,
    car: null,
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitCar.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitCar.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.car = action.payload
            })
            .addCase(submitCar.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    },
});

export default carSlice.reducer;
