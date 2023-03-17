import express from  'express';
import dotenv from  'dotenv';
import mongoose from  'mongoose';

import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from  './routes/auth.js';
import hotelsRoute from  './routes/hotels.js';
import roomsRoute from  './routes/rooms.js';
import usersRoute from  './routes/users.js';

dotenv.config();
const app =  express();

// .env variables
const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI;

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routes
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

mongoose.connect(DB_URI)
.then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
.catch((error) => console.log(error.message));