import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { message } from "antd";

export const submitCar = createAsyncThunk(
    'car/submitCar',
    async (carData, { rejectWithValue }) => {
        try {
            // debugger
            const response = await axios.post('https://desol-int-task.vercel.app//cars', carData);

            if (response.data.success) {
                message.success(response.data.message);
            }

            return response.data
        } catch (error) {
            // debugger
            message.error(`Error: ${error?.response?.data.error}`);
            return rejectWithValue(error.message);
        }
    }
);

