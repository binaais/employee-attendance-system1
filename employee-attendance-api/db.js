// db.js
import mysql from 'mysql2/promise';

export const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // vendose passwordin nëse ke
  database: 'attendance_system'
});
