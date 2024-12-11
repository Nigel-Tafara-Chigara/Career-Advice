// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS for requests from the React frontend
app.use(cors());
app.use(express.json());

// Sample data for programs and their advice
const programs = [
  { program: 'hce', advice: 'Focus on problem-solving and coding skills.' },
  { program: 'hse', advice: 'Learn Python, machine learning, and statistics.' },
  { program: 'hbe', advice: 'Build a strong portfolio with creative projects.' },
  { program: 'hte', advice: 'Understand consumer behavior and digital marketing.' },
  // Add more programs here
];

// Endpoint to search for program advice
app.get('/search', (req, res) => {
  const { query } = req.query;

  // Find the program by name (case-insensitive search)
  const program = programs.find(p => p.program.toLowerCase() === query.toLowerCase());

  if (program) {
    return res.json({ advice: program.advice });
  } else {
    return res.status(404).json({ message: 'Program not found' });
  }
});
app.post('/programs', (req, res) => {
  const { program, advice } = req.body;

  if (program && advice) {
    programs.push({ program, advice });
    res.status(201).json({ message: 'Program and advice added successfully.' });
  } else {
    res.status(400).json({ message: 'Please provide both program and advice.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://10.3.209.223:${port}`);
});
