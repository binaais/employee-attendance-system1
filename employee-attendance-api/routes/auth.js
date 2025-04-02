// routes/auth.js
import express from 'express';
import { db } from '../db.js';

const router = express.Router();

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.execute(
      'SELECT id, username, roli FROM punetoret WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length > 0) {
      res.json({ success: true, user: rows[0] });
    } else {
      res.status(401).json({ success: false, message: 'Kredencialet gabim' });
    }
  } catch (err) {
    console.error('Gabim gjatë login:', err);
    res.status(500).json({ success: false, message: 'Gabim serveri' });
  }
});