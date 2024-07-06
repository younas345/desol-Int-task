import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./Slice/user/userSlice";
import carSlice from "./Slice/car/carSlice";


const rootReducer = combineReducers({
    user: userSlice,
    car:carSlice
})

export default rootReducer