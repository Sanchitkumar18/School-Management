const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//root Route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Routes
app.use('/api', schoolRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
