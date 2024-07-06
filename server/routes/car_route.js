import express from 'express';
import { createCar } from '../controller/car_controller.js';
import {handleFileUploads} from '../middleware/upload_middleware.js';

const router = express.Router();

// Route to create a new car entry
router.post('/cars', handleFileUploads, createCar);

export default router;