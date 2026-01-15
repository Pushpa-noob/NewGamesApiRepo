import express from 'express';
import userRoutes from './user.routes.js';

export const IndexRouter = express.Router()

IndexRouter.get('',(req,res)=>{
    res.json({ message: 'Welcome to the API' });
})

// User routes under /api/users
IndexRouter.use('/users', userRoutes);
