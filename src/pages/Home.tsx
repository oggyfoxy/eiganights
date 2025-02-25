import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../services/imdb';

interface Movie {
  id: string;
  title: string;
  year: number;
  posterUrl: string;
  annotationCount: number;
}

const Home: React.FC = () => {
  const [recentMovies, setRecentMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from your backend
    setRecentMovies([
      { id: '1', title: 'paprika', year: 2006, posterUrl: '', annotationCount: 4 },
      { id: '2', title: 'perfect blue', year: 1997, posterUrl: '', annotationCount: 2 },
      { id: '3', title: 'akira', year: 1988, posterUrl: '', annotationCount: 7 },
      { id: '4', title: 'ghost in the shell', year: 1995, posterUrl: '', annotationCount: 3 },
    ]);
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    
    try {
      const results = await searchMovies(query);
      console.log(results);
      // Handle search results
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <section id="home">
      <h1>welcome, user_xyz</h1>
      
      <SearchBar onSearch={handleSearch} />

      <h2>recently annotated</h2>
      <div className="movie-grid">
        {recentMovies.map(movie => (
          <MovieCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            posterUrl={movie.posterUrl}
            annotationCount={movie.annotationCount}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

