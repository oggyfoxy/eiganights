// A simple Express server to proxy IMDB API requests
// This helps avoid CORS issues and keeps API keys secure

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// You'd need to get an actual API key from a service like OMDb API or similar
const API_KEY = process.env.OMDB_API_KEY;

// Search movies
app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error searching movies:', error);
    res.status(500).json({ error: 'Failed to search movies' });
  }
});

// Get movie details
app.get('/api/movie/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
