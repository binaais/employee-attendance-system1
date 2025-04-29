const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Lidhja me databazën
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'attendance_system',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ================================
// API-t fillojnë këtu
// ================================

// API për testim në browser
app.get('/', (req, res) => {
  res.send('Serveri po funksionon!');
});

// API për login me databazë
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ? LIMIT 1';

  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Gabim gjatë kërkimit në databazë:', err);
      return res.status(500).json({ success: false, message: 'Gabim në server' });
    }

    if (results.length === 1) {
      const user = results[0];
      res.json({ success: true, userId: user.id, role: user.role });
    } else {
      res.status(401).json({ success: false, message: 'Kredencialet janë gabim' });
    }
  });
});

// API për attendance
app.post('/api/attendance', (req, res) => {
  const { userId, type } = req.body;

  if (!userId || !type) {
    return res.status(400).json({ success: false, message: 'Të dhënat mungojnë' });
  }

  const sql = 'INSERT INTO attendance (userId, type) VALUES (?, ?)';
  db.query(sql, [userId, type], (err, result) => {
    if (err) {
      console.error('Gabim gjatë regjistrimit të attendance:', err);
      res.status(500).json({ success: false, message: 'Gabim në server' });
    } else {
      console.log('Attendance u regjistrua në databazë!');
      res.json({ success: true, message: `Attendance ${type} u regjistrua me sukses në databazë` });
    }
  });
});

// API për aplikim për leje
app.post('/api/leave', (req, res) => {
  const { userId, leaveType, startDate, endDate, reason } = req.body;

  const sql = 'INSERT INTO leave_requests (userId, leaveType, startDate, endDate, reason, status) VALUES (?, ?, ?, ?, ?, "pending")';

  db.query(sql, [userId, leaveType, startDate, endDate, reason], (err, result) => {
    if (err) {
      console.error('Gabim gjatë dërgesës së kërkesës për leje:', err);
      return res.status(500).json({ success: false, message: 'Gabim gjatë dërgesës së kërkesës për leje' });
    }
    res.json({ success: true, message: 'Kërkesa për leje u dërgua me sukses!' });
  });
});

// ================================
// API-t mbarojnë këtu
// ================================

app.listen(port, () => {
  console.log(`Serveri u nis në http://localhost:${port}`);
});
