import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: string;
  title: string;
  year: number;
  posterUrl: string;
  annotationCount: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, year, posterUrl, annotationCount }) => {
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <img src={posterUrl || '#'} alt={`${title} poster`} />
      <div className="movie-title">{title} ({year})</div>
      <div className="movie-year">{annotationCount} annotations</div>
    </Link>
  );
};

export default MovieCard;

