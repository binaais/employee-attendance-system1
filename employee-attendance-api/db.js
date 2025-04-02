// db.js
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  
  database: 'attendance_system'
});

async function addUser(username, password, role) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);  

    const query = 'INSERT INTO punetoret (username, password, roli) VALUES (?, ?, ?)';


    const [result] = await db.execute(query, [username, hashedPassword, role]);
  } catch (err) {
    console.error('Error adding user:', err);
  }
}


addUser('newuser', 'userpassword123', 'employee');
