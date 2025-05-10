import { createConnection } from 'mysql2';

// Create a connection to the MySQL database
const connection = createConnection({
  host: 'localhost',
  user: 'root',       
  password: '',        
  database: 'attendance_db', 
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Gabim gjate lidhjes', err.stack);
    return;
  }
  console.log('MySQL connection is established successfully! ');
});

connection.query('SELECT * FROM punetoret', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
    } else {
      console.log('Employees:', results);
    }
  });
  const newEmployee = {
    id: 2,
   username: "entela",
   password: "pass123",
   roli: "punetor",
   numriiKarteles: 1234
  };
  const newEmployee1 = {
    id: 3,
   username: "admin",
   password: "pass1233",
   roli: "admin",
   numriiKarteles: 12345
  };
  const employees = [newEmployee, newEmployee1];

connection.query('INSERT INTO punetoret (username, password, roli, numriiKarteles) VALUES ?', [employees.map(emp => [emp.username, emp.password, emp.roli, emp.numriiKarteles])], (err, results) => {
  if (err) {
    console.error('Insert failed:', err.message);
  } else {
    console.log('Employees added:', results.affectedRows);
  }
});