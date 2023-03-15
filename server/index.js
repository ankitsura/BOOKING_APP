import express from  'express';
import dotenv from  'dotenv';
import mongoose from  'mongoose';

import authRoute from  './routes/auth.js';

dotenv.config();

const app =  express();
const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI;

app.use('/auth', authRoute)

mongoose.connect(DB_URI)
.then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
.catch((error) => console.log(error.message));