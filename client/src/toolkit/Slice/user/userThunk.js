import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { message } from "antd";

export const submitLogin = createAsyncThunk(
    'user/submitLogin',
    async (loginData, { rejectWithValue }) => {
        try {
            // debugger
            const response = await axios.post('http://localhost:4000/api/users', loginData);

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

