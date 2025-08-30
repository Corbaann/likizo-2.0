const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const notesRoutes = require('./routes/notes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', notesRoutes);

// Serve index.html for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});