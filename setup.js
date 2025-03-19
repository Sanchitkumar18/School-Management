const pool = require('./db');

// Function to create the schools table
const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL
      )
    `);
    console.log('Schools table created successfully!');
  } catch (error) {
    console.error('Error creating table:', error);
  } finally {
    // Close the connection pool after setup
    pool.end();
  }
};

// Run table creation
createTable();