const db = require('./db');

const emptyTable = async () => {
  try {
    // Step 1: Delete all existing data
    await db.query('TRUNCATE TABLE schools');
    console.log('All data deleted from schools table.');
  } catch (error) {
    console.error('Error emptying schools table:', error);
  } finally {
    // Close the connection pool
    db.end();
  }
};

// Run the function to empty the table
emptyTable();