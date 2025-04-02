// routes/leave.js
import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.post('/apply', async (req, res) => {
  const { punetori_id, lloji_lejes, data_fillimit, data_mbarimit, arsyeja } = req.body;
  await db.execute(
    `INSERT INTO lejet (punetori_id, lloji_lejes, data_fillimit, data_mbarimit, arsyeja)
     VALUES (?, ?, ?, ?, ?)`,
    [punetori_id, lloji_lejes, data_fillimit, data_mbarimit, arsyeja]
  );
  res.json({ success: true });
});

export default router;
