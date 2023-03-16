import express from  'express';
import dotenv from  'dotenv';
import mongoose from  'mongoose';

import authRoute from  './routes/auth.js';
import hotelsRoute from  './routes/hotels.js';
import roomsRoute from  './routes/rooms.js';
import usersRoute from  './routes/users.js';

dotenv.config();

const app =  express();
const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI;

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

mongoose.connect(DB_URI)
.then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
.catch((error) => console.log(error.message));