import mysql from 'mysql2/promise';

// Create a connection pool (better than single connection)
export const db = mysql.createPool({
  host: 'localhost',        // database host
  user: 'root',             // your MySQL username
  password: 'system', // 🔑 replace with your MySQL password
  database: 'school_db',    // the database you created in Step 2
});
