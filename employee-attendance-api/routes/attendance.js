// routes/attendance.js
import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.post('/check-in', async (req, res) => {
  const { punetori_id } = req.body;
  await db.execute(
    'INSERT INTO pjesemarrja (punetori_id, data, hyrja) VALUES (?, CURDATE(), CURTIME())',
    [punetori_id]
  );
  res.json({ success: true });
});

router.post('/check-out', async (req, res) => {
  const { punetori_id } = req.body;
  await db.execute(
    'UPDATE pjesemarrja SET dalja = CURTIME() WHERE punetori_id = ? AND data = CURDATE()',
    [punetori_id]
  );
  res.json({ success: true });
});

export default router;
