# User Authentication API

A simple Node.js Express API with user login and signup functionality using JWT authentication and bcrypt password hashing.

## Features

- User registration with password hashing (bcrypt)
- User login with JWT token generation
- Protected routes with JWT verification middleware
- MongoDB database integration with Mongoose

## Tech Stack

- **Express.js** - Web framework
- **MongoDB/Mongoose** - Database
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **dotenv** - Environment variables

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

```bash
# Install dependencies
npm install

# Start the server
npm start
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/your_database_name

# JWT Secret Key
JWT_SECRET=your_super_secret_jwt_key

# Server Port
PORT=3000
```

## API Endpoints

### User Registration

**Endpoint:** `POST /api/users/signup`

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "1234567890",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "phone": "1234567890",
      "email": "john@example.com"
    },
    "token": "jwt_token_here"
  }
}
```

### User Login

**Endpoint:** `POST /api/users/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "phone": "1234567890",
      "email": "john@example.com"
    },
    "token": "jwt_token_here"
  }
}
```

### Error Response

**Response (400/401/500):**
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Testing with cURL

### Signup

```bash
curl -X POST http://localhost:3000/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John","phone":"1234567890","email":"john@example.com","password":"password123"}'
```

### Login

```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Access Protected Route

```bash
curl -X GET http://localhost:3000/api/protected-route \
  -H "Authorization: Bearer your_jwt_token_here"
```

## Project Structure

```
├── index.js              # Main entry point
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
├── .gitignore            # Git ignore rules
├── README.md             # Documentation
└── src/
    ├── models/
    │   └── User.js      # Mongoose User model
    ├── routes/
    │   ├── index.routes.js     # Main routes
    │   └── user.routes.js      # User auth routes
    └── middlewares/
        └── auth.middleware.js  # JWT auth middleware
```

## Middleware

### authMiddleware

Protects routes by verifying JWT tokens from the Authorization header.

```javascript
import { authMiddleware } from './src/middlewares/auth.middleware.js';

// Use on protected routes
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ userId: req.user.userId });
});
```

## License

ISC

