import express from 'express';
import { userController } from '../controllers/user.controller.js';

const router = express.Router();

// POST /api/users/signup - Register a new user
router.post('/signup', userController.signUp);

// POST /api/users/login - Login user
router.post('/login', userController.login);

export default router;

