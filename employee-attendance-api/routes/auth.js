// routes/auth.js
import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await db.execute(
    'SELECT * FROM punetoret WHERE username = ? AND password = ?',
    [username, password]
  );

  if (rows.length > 0) {
    res.json({ success: true, user: rows[0] });
  } else {
    res.status(401).json({ success: false, message: 'Kredencialet gabim' });
  }
});

export default router;
