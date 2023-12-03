import mysql from "mysql2/promise";
import keys from "./Keys";
const pool = mysql.createPool(keys.database);

// Ahora puedes usar `await` en lugar de callbacks
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('DB is connected');
    connection.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
})();

export default pool;