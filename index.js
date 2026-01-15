import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { IndexRouter } from './src/routes/index.routes.js';

dotenv.config();

const app = express()

app.use(express.json())

app.use('',IndexRouter)

// Connect to MongoDB and start server
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database_name';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
