import express from 'express';
import connectToDataBase from './connectToDatabase.js';
const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectToDataBase();

// Define your routes and middleware here

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
