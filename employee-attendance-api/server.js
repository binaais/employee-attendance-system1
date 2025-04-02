import express from 'express';
import bcrypt from 'bcrypt';
import mysql from 'mysql2/promise';

const app = express();
app.use(express.json()); // To parse JSON request bodies

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'attendance_db' //mos e ndrro entela
});

// Registration Route
app.post('/api/register', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const username = 'blina';
  const password = '123blina';
  const role = 'punetore';

  
    const [rows] = await db.execute('SELECT id FROM punetoret WHERE username = ?', [username]);

    if (rows.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await db.execute('INSERT INTO punetoret (username, password, roli) VALUES (?, ?, ?)', [username, hashedPassword, role]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
