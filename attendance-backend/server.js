const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Serveri po funksionon!');
});

// ================================
// Këtu fillojnë API-t
// ================================

// Mock users
const users = [
  { id: 1, username: 'admin', password: 'pass12', role: 'admin' },
  { id: 2, username: 'entela', password: 'pass123', role: 'employee' },
  { id: 3, username: 'blina', password: 'pass456', role: 'employee' }
];

// API për login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, userId: user.id, role: user.role });
  } else {
    res.status(401).json({ success: false, message: 'Kredencialet janë gabim' });
  }
});

// API për attendance
app.post('/api/attendance', (req, res) => {
  const { userId, type } = req.body;

  if (!userId || !type) {
    return res.status(400).json({ success: false, message: 'Të dhënat mungojnë' });
  }

  console.log(`User ${userId} ka bërë ${type}`);

  res.json({ success: true, message: `Attendance ${type} u regjistrua me sukses` });
});

// ================================
// Mbarojnë API-t
// ================================

app.listen(port, () => {
  console.log(`Serveri u nis në http://localhost:${port}`);
});
