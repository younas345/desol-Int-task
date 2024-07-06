import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db_connection.js';
import userRoute from './routes/user_route.js';
import carRoute from './routes/car_route.js';



const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(
    cors({
      origin: ['http://localhost:5173'],
      methods: ['POST'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    })
  )
app.use(bodyParser.json());
app.use(express.json())
app.use('/uploads', express.static('uploads'));

// MongoDB connection
connectDB()

// Routes

app.use('/api', userRoute)
app.use('/api', carRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
