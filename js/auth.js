import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createAccessToken, createRefreshToken, sendRefreshToken, sendAccessToken } from './tokenUtils.js';
import mysql from 'mysql';
dotenv.config({ path: 'env/file.env' });

const app = express();
app.use(cors({
  origin: ['http://localhost:5500','http://127.0.0.1:5500'], // or whatever your frontend runs on
  credentials: true
}));
app.use(express.json());
// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'attendance_db',
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  // Query the database to get the user by username
  db.query('SELECT * FROM punetoret WHERE username = ?', [username], async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    // Check if the user exists
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0]; // First matching user (assuming only one)

    try {
      // Direct password comparison (no encryption)
      const passwordMatch = password === user.password;

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Create JWT tokens for the user
      const accessToken = createAccessToken(user.id);
      const refreshToken = createRefreshToken(user.id);

      // Send the refresh token as a cookie
      sendRefreshToken(res, refreshToken);

      // Send the access token and user information in the response
      sendAccessToken(req, res, {
        accessToken,
        roli: user.roli,
        id: user.id
      });

    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Login failed' });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
